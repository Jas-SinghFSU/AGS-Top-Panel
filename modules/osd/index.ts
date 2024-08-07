import options from "options";
import brightness from "services/Brightness"
import { OSDLabel } from "./label/index";
import { OSDBar } from "./bar/index";
import { OSDIcon } from "./icon/index";
import { getPosition } from "lib/utils";
const hyprland = await Service.import("hyprland");
const audio = await Service.import("audio")

const {
    enable,
    orientation,
    location,
    active_monitor,
    monitor
} = options.theme.osd;

const curMonitor = Variable(monitor.value);

hyprland.active.connect("changed", () => {
    curMonitor.value = hyprland.active.monitor.id;
})

const DELAY = 2500;

let count = 0
const handleReveal = (self: any, property: string) => {
    if (!enable.value) {
        return;
    }
    self[property] = true
    count++
    Utils.timeout(DELAY, () => {
        count--

        if (count === 0)
            self[property] = false
    })
}

const renderOSD = () => {


    return Widget.Revealer({
        transition: "crossfade",
        reveal_child: false,
        setup: self => {
            self.hook(brightness, () => {
                handleReveal(self, "reveal_child");
            }, "notify::screen")
            self.hook(brightness, () => {
                handleReveal(self, "reveal_child");
            }, "notify::kbd")
            self.hook(audio.microphone, () => {
                handleReveal(self, "reveal_child");
            }, "notify::volume")
            self.hook(audio.microphone, () => {
                handleReveal(self, "reveal_child");
            }, "notify::is-muted")
            self.hook(audio.speaker, () => {
                handleReveal(self, "reveal_child");
            }, "notify::volume")
            self.hook(audio.speaker, () => {
                handleReveal(self, "reveal_child");
            }, "notify::is-muted")


        },
        child: Widget.Box({
            class_name: "osd-container",
            vertical: orientation.bind("value").as(ort => ort === "vertical"),
            children: orientation.bind("value").as(ort => {
                if (ort === "vertical") {
                    return [
                        OSDLabel(ort),
                        OSDBar(ort),
                        OSDIcon(ort)
                    ]
                }

                return [
                    OSDIcon(ort),
                    OSDBar(ort),
                    OSDLabel(ort),
                ]
            })
        })
    })
}

export default () => Widget.Window({
    monitor: Utils.merge([
        curMonitor.bind("value"),
        monitor.bind("value"),
        active_monitor.bind("value")], (curMon, mon, activeMonitor) => {
            if (activeMonitor === true) {
                return curMon;
            }

            return mon;
        }),
    name: `indicator`,
    class_name: "indicator",
    layer: "overlay",
    anchor: location.bind("value").as(v => getPosition(v)),
    click_through: true,
    child: Widget.Box({
        css: "padding: 1px;",
        expand: true,
        child: renderOSD(),
    }),
    setup: self => {
        self.hook(enable, () => {
            handleReveal(self, "visible");
        })
        self.hook(brightness, () => {
            handleReveal(self, "visible");
        }, "notify::screen")
        self.hook(brightness, () => {
            handleReveal(self, "visible");
        }, "notify::kbd")
        self.hook(audio.microphone, () => {
            handleReveal(self, "visible");
        }, "notify::volume")
        self.hook(audio.microphone, () => {
            handleReveal(self, "visible");
        }, "notify::is-muted")
        self.hook(audio.speaker, () => {
            handleReveal(self, "visible");
        }, "notify::volume")
        self.hook(audio.speaker, () => {
            handleReveal(self, "visible");
        }, "notify::is-muted")
    },
})
