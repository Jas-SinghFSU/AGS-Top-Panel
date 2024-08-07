const notifs = await Service.import("notifications");
import options from "options";
import { notifHasImg } from "../menus/notifications/utils.js";
import { Image } from "./image/index.js";
import { Action } from "./actions/index.js";
import { Header } from "./header/index.js";
import { Body } from "./body/index.js";
import { CloseButton } from "./close/index.js";
import { getPosition } from "lib/utils.js";
const hyprland = await Service.import("hyprland");

const { position, timeout, cache_actions, monitor, active_monitor } = options.notifications;


const curMonitor = Variable(monitor.value);

hyprland.active.connect("changed", () => {
    curMonitor.value = hyprland.active.monitor.id;
})

export default () => {
    Utils.merge([timeout.bind("value"), cache_actions.bind("value")], (timeout, doCaching) => {
        notifs.popupTimeout = timeout;
        notifs.cacheActions = doCaching;
    });

    return Widget.Window({
        name: "notifications-window",
        class_name: "notifications-window",
        monitor: Utils.merge([
            curMonitor.bind("value"),
            monitor.bind("value"),
            active_monitor.bind("value")], (curMon, mon, activeMonitor) => {
                if (activeMonitor === true) {
                    return curMon;
                }
    
                return mon;
            }
        ),
        layer: "overlay",
        anchor: position.bind("value").as(v => getPosition(v)),
        exclusivity: "ignore",
        child: Widget.Box({
            class_name: "notification-card-container",
            vertical: true,
            hexpand: true,
            setup: (self) => {
                self.hook(notifs, () => {
                    return (self.children = notifs.popups.map((notif) => {
                        return Widget.Box({
                            class_name: "notification-card",
                            vpack: "start",
                            hexpand: true,
                            children: [
                                Image(notif),
                                Widget.Box({
                                    vpack: "start",
                                    vertical: true,
                                    hexpand: true,
                                    class_name: `notification-card-content ${!notifHasImg(notif) ? "noimg" : ""}`,
                                    children: [Header(notif), Body(notif), Action(notif, notifs)],
                                }),
                                CloseButton(notif, notifs),
                            ],
                        });
                    }));
                });
            },
        }),
    });
};
