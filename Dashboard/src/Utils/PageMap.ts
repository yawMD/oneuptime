enum PageMap {
    INIT = 'INIT',
    HOME = 'HOME',

    INCIDENTS = 'INCIDENTS',
    INCIDENT_VIEW = 'INCIDENT_VIEW',
    INCIDENT_VIEW_DELETE = 'INCIDENT_VIEW_DELETE',
    INCIDENT_VIEW_STATE_TIMELINE = 'INCIDENT_VIEW_STATE_TIMELINE',
    INCIDENT_INTERNAL_NOTE = 'INCIDENT_INTERNAL_NOTE',
    INCIDENT_PUBLIC_NOTE = 'INCIDENT_PUBLIC_NOTE',

    MONITORS = 'MONITORS',
    MONITOR_VIEW = 'MONITOR_VIEW',
    MONITOR_VIEW_DELETE = 'MONITOR_VIEW_DELETE',
    MONITOR_VIEW_STATUS_TIMELINE = 'MONITOR_VIEW_STATUS_TIMELINE',
    MONITOR_VIEW_INCIDENTS = 'MONITOR_VIEW_INCIDENTS',

    STATUS_PAGES = 'STATUS_PAGES',
    STATUS_PAGE_VIEW = 'STATUS_PAGE_VIEW',
    STATUS_PAGE_VIEW_BRANDING = 'STATUS_PAGE_VIEW_BRADNING',
    STATUS_PAGE_VIEW_DELETE = 'STATUS_PAGE_VIEW_DELETE',
    STATUS_PAGE_VIEW_DOMAINS = 'STATUS_PAGE_VIEW_DOMAINS',
    STATUS_PAGE_VIEW_EMBEDDED = 'STATUS_PAGE_VIEW_EMBEDDED',
    STATUS_PAGE_VIEW_ANNOUNCEMENTS = 'STATUS_PAGE_VIEW_ANNOUNCEMENTS',
    STATUS_PAGE_VIEW_SUBSCRIBERS = 'STATUS_PAGE_VIEW_SUBSCRIBERS',
    STATUS_PAGE_VIEW_RESOURCES = 'STATUS_PAGE_VIEW_RESOURCES',
    STATUS_PAGE_VIEW_ADVANCED_OPTIONS = 'STATUS_PAGE_VIEW_ADVANCED_OPTIONS',
    STATUS_PAGE_VIEW_CUSTOM_HTML_CSS = 'STATUS_PAGE_VIEW_CUSTOM_HTML_CSS',
    STATUS_PAGE_VIEW_GROUPS = 'STATUS_PAGE_VIEW_GROUPS',

    LOGS = 'LOGS',
    ON_CALL_DUTY = 'ON_CALL_DUTY',
    AUTOMATION_SCRIPTS = 'AUTOMATION_SCRIPTS',
    REPORTS = 'REPORTS',
    ERROR_TRACKER = 'ERROR_TRACKER',

    // Settings Routes
    SETTINGS = 'SETTINGS',
    SETTINGS_DANGERZONE = 'SETTINGS_DANGERZONE',

    // API Keys.
    SETTINGS_APIKEYS = 'SETTINGS_APIKEYS',
    SETTINGS_APIKEY_VIEW = 'SETTINGS_APIKEY_VIEW',
    SETTINGS_CUSTOM_SMTP = 'SETTINGS_CUSTOM_SMTP',

    // Team
    SETTINGS_TEAMS = 'SETTINGS_TEAMS',
    SETTINGS_TEAM_VIEW = 'SETTINGS_TEAM_VIEW',

    // Resource settings.
    SETTINGS_INCIDENTS_STATE = 'SETTINGS_INCIDENTS_STATE',
    SETTINGS_INCIDENTS_SEVERITY = 'SETTINGS_INCIDENTS_SEVERITY',
    SETTINGS_MONITORS_STATUS = 'SETTINGS_MONITORS_STATUS',

    // Labels.
    SETTINGS_LABELS = 'SETTINGS_LABELS',

    // Domains

    SETTINGS_DOMAINS = 'SETTINGS_DOMAINS',

    // Misc
    LOGOUT = 'LOGOUT',
}

export default PageMap;