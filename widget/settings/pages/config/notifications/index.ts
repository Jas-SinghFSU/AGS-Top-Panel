import { Option } from "widget/settings/shared/Option";
import { Header } from "widget/settings/shared/Header";

import options from "options";

export const NotificationSettings = () => {
    return Widget.Box({
        class_name: "bar-theme-page paged-container",
        vertical: true,
        children: [
            Header('Notification Settings'),
            Option({ opt: options.notifications.position, title: 'Notification Location', type: 'enum', enums: ['top left', 'top', 'top right', 'bottom right', 'bottom', 'bottom left'] }),
            Option({ opt: options.notifications.monitor, title: 'Monitor', subtitle: 'The ID of the monitor on which to display the notification', type: 'number' }),
            Option({ opt: options.notifications.active_monitor, title: 'Follow Cursor', subtitle: 'The notification will follow the monitor of your cursor', type: 'boolean' }),
            Option({ opt: options.notifications.timeout, title: 'Notification Timeout', subtitle: 'How long notification popups will last (in milliseconds).', type: 'number' }),
            Option({ opt: options.notifications.cache_actions, title: 'Preserve Actions', subtitle: 'This will persist the action buttons of a notification after rebooting.', type: 'boolean' }),
        ]
    })
}
