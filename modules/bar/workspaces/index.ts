const hyprland = await Service.import("hyprland");
import { WorkspaceRule, WorkspaceMap } from "lib/types/workspace";
import options from "options";

const { workspaces, monitorSpecific, reverse_scroll } = options.bar.workspaces;

function range(length: number, start = 1) {
    return Array.from({ length }, (_, i) => i + start);
}

const Workspaces = (monitor = -1, ws = 8) => {
    const getWorkspacesForMonitor = (curWs: number, wsRules: WorkspaceMap) => {
        if (!wsRules || !Object.keys(wsRules).length) {
            return true;
        }

        const monitorMap = {};
        hyprland.monitors.forEach((m) => (monitorMap[m.id] = m.name));

        const currentMonitorName = monitorMap[monitor];
        return wsRules[currentMonitorName].includes(curWs);
    };

    const getWorkspaceRules = (): WorkspaceMap => {
        try {
            const rules = Utils.exec("hyprctl workspacerules -j");

            const workspaceRules = {};

            JSON.parse(rules).forEach((rule: WorkspaceRule, index: number) => {
                if (Object.hasOwnProperty.call(workspaceRules, rule.monitor)) {
                    workspaceRules[rule.monitor].push(index + 1);
                } else {
                    workspaceRules[rule.monitor] = [index + 1];
                }
            });

            return workspaceRules;
        } catch (err) {
            console.error(err);
            return {};
        }
    };

    const getCurrentMonitorWorkspaces = () => {
        const monitorWorkspaces = getWorkspaceRules();
        const monitorMap = {};
        hyprland.monitors.forEach((m) => (monitorMap[m.id] = m.name));

        const currentMonitorName = monitorMap[monitor];

        return monitorWorkspaces[currentMonitorName];
    }
    const currentMonitorWorkspaces = Variable(getCurrentMonitorWorkspaces());

    workspaces.connect("changed", () => {
        currentMonitorWorkspaces.value = getCurrentMonitorWorkspaces()
    })

    const goToNextWS = () => {
        const curWorkspace = hyprland.active.workspace.id;
        const indexOfWs = currentMonitorWorkspaces.value.indexOf(curWorkspace);
        let nextIndex = indexOfWs + 1;
        if (nextIndex >= currentMonitorWorkspaces.value.length) {
            nextIndex = 0;
        }

        hyprland.messageAsync(`dispatch workspace ${currentMonitorWorkspaces.value[nextIndex]}`)
    }

    const goToPrevWS = () => {
        const curWorkspace = hyprland.active.workspace.id;
        const indexOfWs = currentMonitorWorkspaces.value.indexOf(curWorkspace);
        let prevIndex = indexOfWs - 1;
        if (prevIndex < 0) {
            prevIndex = currentMonitorWorkspaces.value.length - 1;
        }

        hyprland.messageAsync(`dispatch workspace ${currentMonitorWorkspaces.value[prevIndex]}`)
    }

    function throttle<T extends (...args: any[]) => void>(func: T, limit: number): T {
        let inThrottle: boolean;
        return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => {
                    inThrottle = false;
                }, limit);
            }
        } as T;
    }
    const onScrollUpDebounced = throttle(() => {
        if (reverse_scroll.value === true) {
            goToPrevWS();
        } else {
            goToNextWS();
        }
    }, 55);

    const onScrollDownDebounced = throttle(() => {
        if (reverse_scroll.value === true) {
            goToNextWS();
        } else {
            goToPrevWS();
        }
    }, 55);

    return {
        component: Widget.Box({
            class_name: "workspaces",
            children: Utils.merge(
                [workspaces.bind(), monitorSpecific.bind()],
                (workspaces, monitorSpecific) => {
                    return range(workspaces || 8)
                        .filter((i) => {
                            if (!monitorSpecific) {
                                return true;
                            }
                            const workspaceRules = getWorkspaceRules();
                            return getWorkspacesForMonitor(i, workspaceRules);
                        })
                        .map((i) => {
                            return Widget.Button({
                                on_primary_click: () => {
                                    hyprland.messageAsync(`dispatch workspace ${i}`)

                                },
                                child: Widget.Label({
                                    attribute: i,
                                    vpack: "center",
                                    class_name: Utils.merge(
                                        [
                                            options.bar.workspaces.show_icons.bind("value"),
                                            options.bar.workspaces.icons.available.bind("value"),
                                            options.bar.workspaces.icons.active.bind("value"),
                                            options.bar.workspaces.icons.occupied.bind("value"),
                                            hyprland.active.workspace.bind("id")
                                        ],
                                        (show_icons) => {
                                            if (show_icons) {
                                                return `workspace-icon`;
                                            }
                                            return "";
                                        },
                                    ),
                                    label: Utils.merge(
                                        [
                                            options.bar.workspaces.show_icons.bind("value"),
                                            options.bar.workspaces.icons.available.bind("value"),
                                            options.bar.workspaces.icons.active.bind("value"),
                                            options.bar.workspaces.icons.occupied.bind("value"),
                                            hyprland.active.workspace.bind("id")
                                        ],
                                        (showIcons, available, active, occupied, _) => {
                                            if (showIcons) {
                                                if (hyprland.active.workspace.id === i) {
                                                    return active;
                                                }
                                                if ((hyprland.getWorkspace(i)?.windows || 0) > 0) {
                                                    return occupied;
                                                }
                                                if (
                                                    monitor !== -1
                                                ) {
                                                    return available;
                                                }
                                            }
                                            return `${i}`;
                                        },
                                    ),
                                    setup: (self) => {
                                        self.hook(hyprland, () => {
                                            self.toggleClassName(
                                                "active",
                                                hyprland.active.workspace.id === i,
                                            );
                                            self.toggleClassName(
                                                "occupied",
                                                (hyprland.getWorkspace(i)?.windows || 0) > 0,
                                            );
                                        });
                                    },
                                })
                            });
                        });
                },
            ),
            setup: (box) => {
                if (ws === 0) {
                    box.hook(hyprland.active.workspace, () =>
                        box.children.map((btn) => {
                            btn.visible = hyprland.workspaces.some(
                                (ws) => ws.id === btn.attribute,
                            );
                        }),
                    );
                }
            },
        }),
        isVisible: true,
        boxClass: "workspaces",
        useBox: true,
        props: {
            on_scroll_up: () => {
                onScrollUpDebounced();
            },
            on_scroll_down: () => {
                onScrollDownDebounced()
            },
        }
    };
};
export { Workspaces };
