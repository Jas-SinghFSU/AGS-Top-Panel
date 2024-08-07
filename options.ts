import { opt, mkOptions } from "lib/option"

const colors = {
    "rosewater": "#f5e0dc",
    "flamingo": "#f2cdcd",
    "pink": "#f5c2e7",
    "mauve": "#cba6f7",
    "red": "#f38ba8",
    "maroon": "#eba0ac",
    "peach": "#fab387",
    "yellow": "#f9e2af",
    "green": "#a6e3a1",
    "teal": "#94e2d5",
    "sky": "#89dceb",
    "sapphire": "#74c7ec",
    "blue": "#89b4fa",
    "lavender": "#b4befe",
    "text": "#cdd6f4",
    "subtext1": "#bac2de",
    "subtext2": "#a6adc8",
    "overlay2": "#9399b2",
    "overlay1": "#7f849c",
    "overlay0": "#6c7086",
    "surface2": "#585b70",
    "surface1": "#45475a",
    "surface0": "#313244",
    "base2": "#242438",
    "base": "#1e1e2e",
    "mantle": "#181825",
    "crust": "#11111b"
};

const options = mkOptions(OPTIONS, {
    theme: {
        font: {
            size: opt("1.2rem"),
            name: opt("Ubuntu Nerd Font"),
            weight: opt(600),
        },
        notification: {
            background: opt(colors.mantle),
            actions: {
                background: opt(colors.lavender),
                text: opt(colors.mantle),
            },
            label: opt(colors.lavender),
            border: opt(colors.surface0),
            time: opt(colors.overlay1),
            text: opt(colors.text),
            labelicon: opt(colors.lavender),
            close_button: {
                background: opt(colors.red),
                label: opt(colors.crust)
            }
        },
        osd: {
            enable: opt(true),
            orientation: opt<"horizontal" | "vertical">("vertical"),
            bar_container: opt(colors.crust),
            icon_container: opt(colors.lavender),
            bar_color: opt(colors.lavender),
            bar_empty_color: opt(colors.surface0),
            bar_overflow_color: opt(colors.red),
            icon: opt(colors.crust),
            label: opt(colors.lavender),
            monitor: opt(0),
            active_monitor: opt(true),
            radius: opt("0.4em"),
            margins: opt("0px 5px 0px 0px"),
            location: opt<"top left" | "top" | "top right" | "right" | "bottom right" | "bottom" | "bottom left" | "left">("right"),
        },
        bar: {
            floating: opt(false),
            margin_top: opt("0.5em"),
            margin_bottom: opt("0em"),
            margin_sides: opt("0.5em"),
            border_radius: opt("0.4em"),
            outer_spacing: opt("1.6em"),
            label_spacing: opt("0.5em"),
            transparent: opt(false),
            background: opt(colors.crust),
            buttons: {
                monochrome: opt(false),
                spacing: opt("0.25em"),
                radius: opt("0.3em"),
                background: opt(colors.base2),
                hover: opt(colors.surface1),
                text: opt(colors.lavender),
                icon: opt(colors.lavender),
                dashboard: {
                    background: opt(colors.base2),
                    hover: opt(colors.surface1),
                    icon: opt(colors.yellow)
                },
                workspaces: {
                    background: opt(colors.base2),
                    hover: opt(colors.surface1),
                    available: opt(colors.sky),
                    occupied: opt(colors.flamingo),
                    active: opt(colors.pink),
                    numbered_active_highlight_border: opt("0.2em"),
                    numbered_active_text_color: opt(colors.mantle),
                },
                windowtitle: {
                    background: opt(colors.base2),
                    hover: opt(colors.surface1),
                    text: opt(colors.pink),
                    icon: opt(colors.pink),
                    spacing: opt("0.5em"),
                },
                media: {
                    background: opt(colors.base2),
                    hover: opt(colors.surface1),
                    text: opt(colors.lavender),
                    icon: opt(colors.lavender),
                    spacing: opt("0.5em"),
                },
                volume: {
                    background: opt(colors.base2),
                    hover: opt(colors.surface1),
                    text: opt(colors.maroon),
                    icon: opt(colors.maroon),
                    spacing: opt("0.5em"),
                },
                network: {
                    background: opt(colors.base2),
                    hover: opt(colors.surface1),
                    text: opt(colors.mauve),
                    icon: opt(colors.mauve),
                    spacing: opt("0.5em"),
                },
                bluetooth: {
                    background: opt(colors.base2),
                    hover: opt(colors.surface1),
                    text: opt(colors.sky),
                    icon: opt(colors.sky),
                    spacing: opt("0.5em"),
                },
                systray: {
                    background: opt(colors.base2),
                    hover: opt(colors.surface1),
                },
                battery: {
                    background: opt(colors.base2),
                    hover: opt(colors.surface1),
                    text: opt(colors.yellow),
                    icon: opt(colors.yellow),
                    spacing: opt("0.5em"),
                },
                clock: {
                    background: opt(colors.base2),
                    hover: opt(colors.surface1),
                    text: opt(colors.pink),
                    icon: opt(colors.pink),
                },
                notifications: {
                    background: opt(colors.base2),
                    hover: opt(colors.surface1),
                    icon: opt(colors.lavender),
                    total: opt(colors.lavender),
                    spacing: opt("0.5em"),
                },
            },
            menus: {
                monochrome: opt(false),
                background: opt(colors.crust),
                cards: opt(colors.base),
                card_radius: opt("0.4em"),
                border: {
                    size: opt("0.13em"),
                    radius: opt("0.7em"),
                    color: opt(colors.surface0)
                },
                text: opt(colors.text),
                dimtext: opt(colors.surface2),
                feinttext: opt(colors.surface0),
                label: opt(colors.lavender),
                listitems: {
                    passive: opt(colors.text),
                    active: opt(colors.lavender)
                },
                icons: {
                    passive: opt(colors.surface2),
                    active: opt(colors.lavender),
                },
                switch: {
                    enabled: opt(colors.lavender),
                    disabled: opt(colors.surface0),
                    puck: opt(colors.overlay0)
                },
                buttons: {
                    default: opt(colors.lavender),
                    active: opt(colors.pink),
                    disabled: opt(colors.surface2),
                    text: opt(colors.crust)
                },
                iconbuttons: {
                    passive: opt(colors.text),
                    active: opt(colors.lavender)
                },
                progressbar: {
                    foreground: opt(colors.lavender),
                    background: opt(colors.surface1),
                },
                slider: {
                    primary: opt(colors.lavender),
                    background: opt(colors.surface2),
                    backgroundhover: opt(colors.surface1),
                    puck: opt(colors.overlay0)
                },
                dropdownmenu: {
                    background: opt(colors.crust),
                    text: opt(colors.text),
                    divider: opt(colors.base)
                },
                tooltip: {
                    background: opt(colors.crust),
                    text: opt(colors.text)
                },
                menu: {
                    media: {
                        song: opt(colors.lavender),
                        artist: opt(colors.teal),
                        album: opt(colors.pink),
                        background: {
                            color: opt(colors.crust),
                        },
                        border: {
                            color: opt(colors.surface0),
                        },
                        buttons: {
                            inactive: opt(colors.surface2),
                            enabled: opt(colors.teal),
                            background: opt(colors.lavender),
                            text: opt(colors.crust),
                        },
                        slider: {
                            primary: opt(colors.pink),
                            background: opt(colors.surface2),
                            backgroundhover: opt(colors.surface1),
                            puck: opt(colors.overlay0)
                        }
                    },
                    volume: {
                        card: {
                            color: opt(colors.base),
                        },
                        background: {
                            color: opt(colors.crust),
                        },
                        border: {
                            color: opt(colors.surface0),
                        },
                        label: {
                            color: opt(colors.maroon),
                        },
                        text: opt(colors.text),
                        listitems: {
                            passive: opt(colors.text),
                            active: opt(colors.maroon)
                        },
                        iconbutton: {
                            passive: opt(colors.text),
                            active: opt(colors.maroon),
                        },
                        icons: {
                            passive: opt(colors.overlay2),
                            active: opt(colors.maroon),
                        },
                        audio_slider: {
                            primary: opt(colors.maroon),
                            background: opt(colors.surface2),
                            backgroundhover: opt(colors.surface1),
                            puck: opt(colors.overlay0)
                        },
                        input_slider: {
                            primary: opt(colors.maroon),
                            background: opt(colors.surface2),
                            backgroundhover: opt(colors.surface1),
                            puck: opt(colors.overlay0)
                        }
                    },
                    network: {
                        card: {
                            color: opt(colors.base),
                        },
                        background: {
                            color: opt(colors.crust),
                        },
                        border: {
                            color: opt(colors.surface0),
                        },
                        label: {
                            color: opt(colors.mauve),
                        },
                        text: opt(colors.text),
                        status: {
                            color: opt(colors.overlay0),
                        },
                        listitems: {
                            passive: opt(colors.text),
                            active: opt(colors.mauve)
                        },
                        icons: {
                            passive: opt(colors.overlay2),
                            active: opt(colors.mauve),
                        },
                        iconbuttons: {
                            passive: opt(colors.text),
                            active: opt(colors.mauve)
                        },
                    },
                    bluetooth: {
                        card: {
                            color: opt(colors.base),
                        },
                        background: {
                            color: opt(colors.crust),
                        },
                        border: {
                            color: opt(colors.surface0),
                        },
                        label: {
                            color: opt(colors.sky),
                        },
                        text: opt(colors.text),
                        status: opt(colors.overlay0),
                        switch_divider: opt(colors.surface1),
                        switch: {
                            enabled: opt(colors.sky),
                            disabled: opt(colors.surface0),
                            puck: opt(colors.overlay0)
                        },
                        listitems: {
                            passive: opt(colors.text),
                            active: opt(colors.sky)
                        },
                        icons: {
                            passive: opt(colors.overlay2),
                            active: opt(colors.sky),
                        },
                        iconbutton: {
                            passive: opt(colors.text),
                            active: opt(colors.sky)
                        },
                    },
                    systray: {
                        dropdownmenu: {
                            background: opt(colors.crust),
                            text: opt(colors.text),
                            divider: opt(colors.base)
                        },
                    },
                    battery: {
                        card: {
                            color: opt(colors.base),
                        },
                        background: {
                            color: opt(colors.crust),
                        },
                        border: {
                            color: opt(colors.surface0),
                        },
                        label: {
                            color: opt(colors.yellow),
                        },
                        text: opt(colors.text),
                        listitems: {
                            passive: opt(colors.text),
                            active: opt(colors.yellow)
                        },
                        icons: {
                            passive: opt(colors.overlay2),
                            active: opt(colors.yellow),
                        },
                        slider: {
                            primary: opt(colors.yellow),
                            background: opt(colors.surface2),
                            backgroundhover: opt(colors.surface1),
                            puck: opt(colors.overlay0)
                        },
                    },
                    clock: {
                        card: {
                            color: opt(colors.base),
                        },
                        background: {
                            color: opt(colors.crust),
                        },
                        border: {
                            color: opt(colors.surface0),
                        },
                        text: opt(colors.text),
                        time: {
                            time: opt(colors.pink),
                            timeperiod: opt(colors.teal),
                        },
                        calendar: {
                            yearmonth: opt(colors.teal),
                            weekdays: opt(colors.pink),
                            paginator: opt(colors.pink),
                            currentday: opt(colors.pink),
                            days: opt(colors.text),
                            contextdays: opt(colors.surface2),
                        },
                        weather: {
                            icon: opt(colors.pink),
                            temperature: opt(colors.text),
                            status: opt(colors.teal),
                            stats: opt(colors.pink),
                            thermometer: {
                                extremelyhot: opt(colors.red),
                                hot: opt(colors.peach),
                                moderate: opt(colors.lavender),
                                cold: opt(colors.blue),
                                extremelycold: opt(colors.sky),
                            },
                            hourly: {
                                time: opt(colors.pink),
                                icon: opt(colors.pink),
                                temperature: opt(colors.pink)
                            }
                        },
                    },
                    dashboard: {
                        card: {
                            color: opt(colors.base),
                        },
                        background: {
                            color: opt(colors.crust),
                        },
                        border: {
                            color: opt(colors.surface0),
                        },
                        profile: {
                            name: opt(colors.pink)
                        },
                        powermenu: {
                            shutdown: opt(colors.red),
                            restart: opt(colors.peach),
                            logout: opt(colors.green),
                            sleep: opt(colors.sky),
                            confirmation: {
                                card: opt(colors.base),
                                background: opt(colors.crust),
                                border: opt(colors.surface0),
                                label: opt(colors.lavender),
                                body: opt(colors.text),
                                confirm: opt(colors.green),
                                deny: opt(colors.red),
                                button_text: opt(colors.crust),
                            }
                        },
                        shortcuts: {
                            background: opt(colors.lavender),
                            text: opt(colors.crust),
                            recording: opt(colors.green)
                        },
                        controls: {
                            disabled: opt(colors.surface2),
                            wifi: {
                                background: opt(colors.mauve),
                                text: opt(colors.crust),
                            },
                            bluetooth: {
                                background: opt(colors.sky),
                                text: opt(colors.crust),
                            },
                            notifications: {
                                background: opt(colors.yellow),
                                text: opt(colors.crust),
                            },
                            volume: {
                                background: opt(colors.maroon),
                                text: opt(colors.crust),
                            },
                            input: {
                                background: opt(colors.pink),
                                text: opt(colors.crust),
                            },
                        },
                        directories: {
                            left: {
                                top: {
                                    color: opt(colors.pink),
                                },
                                middle: {
                                    color: opt(colors.yellow),
                                },
                                bottom: {
                                    color: opt(colors.maroon),
                                },
                            },
                            right: {
                                top: {
                                    color: opt(colors.teal),
                                },
                                middle: {
                                    color: opt(colors.mauve),
                                },
                                bottom: {
                                    color: opt(colors.lavender),
                                },
                            }
                        },
                        monitors: {
                            bar_background: opt(colors.surface1),
                            cpu: {
                                icon: opt(colors.maroon),
                                bar: opt(colors.maroon),
                                label: opt(colors.maroon),
                            },
                            ram: {
                                icon: opt(colors.yellow),
                                bar: opt(colors.yellow),
                                label: opt(colors.yellow),
                            },
                            gpu: {
                                icon: opt(colors.green),
                                bar: opt(colors.green),
                                label: opt(colors.green),
                            },
                            disk: {
                                icon: opt(colors.pink),
                                bar: opt(colors.pink),
                                label: opt(colors.pink),
                            },
                        },
                    },
                    notifications: {
                        label: opt(colors.lavender),
                        no_notifications_label: opt(colors.surface0),
                        background: opt(colors.crust),
                        card: opt(colors.base),
                        border: opt(colors.surface0),
                        switch_divider: opt(colors.surface1),
                        clear: opt(colors.red),
                        switch: {
                            enabled: opt(colors.lavender),
                            disabled: opt(colors.surface0),
                            puck: opt(colors.overlay0)
                        },
                    },
                }
            }
        }
    },

    bar: {
        layouts: opt({
            "1": {
                left: [
                    "dashboard",
                    "workspaces",
                    "windowtitle"
                ],
                middle: [
                    "media"
                ],
                right: [
                    "volume",
                    "clock",
                    "notifications"
                ]
            },
            "2": {
                left: [
                    "dashboard",
                    "workspaces",
                    "windowtitle"
                ],
                middle: [
                    "media"
                ],
                right: [
                    "volume",
                    "clock",
                    "notifications"
                ]
            },
            "0": {
                left: [
                    "dashboard",
                    "workspaces",
                    "windowtitle"
                ],
                middle: [
                    "media"
                ],
                right: [
                    "volume",
                    "network",
                    "bluetooth",
                    "battery",
                    "systray",
                    "clock",
                    "notifications"
                ]
            }
        }),
        launcher: {
            icon: opt("󰣇"),
        },
        workspaces: {
            show_icons: opt(false),
            show_numbered: opt(false),
            numbered_active_indicator: opt<"underline" | "highlight">("underline"),
            icons: {
                available: opt(""),
                active: opt(""),
                occupied: opt(""),
            },
            workspaces: opt(10),
            spacing: opt(1),
            monitorSpecific: opt(true),
            reverse_scroll: opt(false),
            scroll_speed: opt(5),
        },
        volume: {
            label: opt(true),
        },
        network: {
            truncation: opt(true),
            truncation_size: opt(7),
            label: opt(true),
        },
        bluetooth: {
            label: opt(true),
        },
        battery: {
            label: opt(true),
        },
        systray: {
            ignore: opt([
                "KDE Connect Indicator",
                "spotify-client",
            ]),
        },
        clock: {
            format: opt("󰃭  %a %b %d    %I:%M:%S %p"),
        },
        notifications: {
            show_total: opt(false),
        },
    },

    menus: {
        dashboard: {
            powermenu: {
                sleep: opt("systemctl suspend"),
                reboot: opt("systemctl reboot"),
                logout: opt("pkill Hyprland"),
                shutdown: opt("shutdown now"),
                avatar: {
                    image: opt("avatar-default-symbolic"),
                    name: opt<"system" | string>("system"),
                },
            },
            stats: {
                enable_gpu: opt(false),
            },
            shortcuts: {
                left: {
                    shortcut1: {
                        icon: opt("󰇩"),
                        tooltip: opt("Microsoft Edge"),
                        command: opt("microsoft-edge-stable")
                    },
                    shortcut2: {
                        icon: opt(""),
                        tooltip: opt("Spotify"),
                        command: opt("spotify-launcher")
                    },
                    shortcut3: {
                        icon: opt(""),
                        tooltip: opt("Discord"),
                        command: opt("discord")
                    },
                    shortcut4: {
                        icon: opt(""),
                        tooltip: opt("Search Apps"),
                        command: opt("rofi -show drun")
                    },
                },
                right: {
                    shortcut1: {
                        icon: opt(""),
                        tooltip: opt("Color Picker"),
                        command: opt("hyprpicker -a")
                    },
                    shortcut3: {
                        icon: opt("󰄀"),
                        tooltip: opt("Screenshot"),
                        command: opt("bash -c \"$HOME/.config/ags/services/snapshot.sh\"")
                    },
                }
            },
            directories: {
                left: {
                    directory1: {
                        label: opt("󰉍 Downloads"),
                        command: opt("bash -c \"dolphin $HOME/Downloads/\"")
                    },
                    directory2: {
                        label: opt("󰉏 Videos"),
                        command: opt("bash -c \"dolphin $HOME/Videos/\"")
                    },
                    directory3: {
                        label: opt("󰚝 Projects"),
                        command: opt("bash -c \"dolphin $HOME/Projects/\"")
                    },
                },
                right: {
                    directory1: {
                        label: opt("󱧶 Documents"),
                        command: opt("bash -c \"dolphin $HOME/Documents/\"")
                    },
                    directory2: {
                        label: opt("󰉏 Pictures"),
                        command: opt("bash -c \"dolphin $HOME/Pictures/\"")
                    },
                    directory3: {
                        label: opt("󱂵 Home"),
                        command: opt("bash -c \"dolphin $HOME/\"")
                    },
                }
            },
        },
        clock: {
            time: {
                military: opt(false),
            },
            weather: {
                interval: opt(60000),
                unit: opt<"metric" | "imperial">("imperial"),
                location: opt("Los Angeles"),
                key: opt<string>(
                    JSON.parse(Utils.readFile(`${App.configDir}/.weather.json`) || "{}")?.weather_api_key || "",
                ),
            }
        }
    },

    terminal: opt("kitty"),

    notifications: {
        position: opt<"top" | "top right" | "top left" | "bottom" | "bottom right" | "bottom left">("top right"),
        monitor: opt(0),
        active_monitor: opt(true),
        timeout: opt(7000),
        cache_actions: opt(true),
    },
})

globalThis["options"] = options
export default options
