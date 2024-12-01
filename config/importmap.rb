# frozen_string_literal: true

# Use direct uploads for Active Storage (remember to import "@rails/activestorage" in your application.js)
# pin "@rails/activestorage", to: "activestorage.esm.js"

# Use npm packages from a JavaScript CDN by running ./bin/importmap

pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin_all_from "app/javascript/components", under: "components"
pin "throttle-debounce" # @5.0.2

# AppSignal
pin "@appsignal/javascript", to: "@appsignal--javascript.js" # @1.4.0
pin "@appsignal/core", to: "@appsignal--core.js" # @1.1.23
pin "https" # @2.1.0
pin "tslib" # @2.8.1

# ActiveAdmin (used also by members)
pin "flowbite", to: "flowbite.turbo.min.js" # @2.4.1
pin "browser-update" # @3.3.54

# Members
pin "members", preload: false
pin_all_from "app/javascript/controllers/members", under: "controllers/members", preload: false
pin "flatpickr", preload: false # @4.6.13
pin "flatpickr/dist/l10n/fr", to: "flatpickr--dist--l10n--fr.js", preload: false # @4.6.13
pin "flatpickr/dist/l10n/de", to: "flatpickr--dist--l10n--de.js", preload: false # @4.6.13
pin "flatpickr/dist/l10n/it", to: "flatpickr--dist--l10n--it.js", preload: false # @4.6.13

# Admin
pin "admin", preload: false
pin_all_from "app/javascript/admin", under: "admin", preload: false
pin_all_from "app/javascript/controllers/admin", under: "controllers/admin", preload: false
pin "trix", to: "trix.js", preload: false
pin "@rails/actiontext", to: "actiontext.js", preload: false
pin "@joeattardi/emoji-button", to: "@joeattardi--emoji-button.js", preload: false # @4.6.4
pin "@roderickhsiao/emoji-button-locale-data/dist/de", to: "@roderickhsiao--emoji-button-locale-data--dist--de.js", preload: false # @0.1.2
pin "@roderickhsiao/emoji-button-locale-data/dist/fr", to: "@roderickhsiao--emoji-button-locale-data--dist--fr.js", preload: false # @0.1.2
pin "@roderickhsiao/emoji-button-locale-data/dist/it", to: "@roderickhsiao--emoji-button-locale-data--dist--it.js", preload: false # @0.1.2
# Don't forget to update app/assets/stylesheets/tom-select.css too
pin "tom-select", preload: false # @2.3.1
pin "@stimulus-components/sortable", to: "@stimulus-components--sortable.js", preload: false # @5.0.1
pin "@rails/request.js", to: "@rails--request.js.js", preload: false # @0.0.11
pin "sortablejs", preload: false # @1.15.3
# Codemirror
pin "codemirror" # @6.0.1
pin "@codemirror/autocomplete", to: "@codemirror--autocomplete.js" # @6.18.3
pin "@codemirror/commands", to: "@codemirror--commands.js" # @6.7.1
pin "@codemirror/lint", to: "@codemirror--lint.js" # @6.8.4
pin "@codemirror/search", to: "@codemirror--search.js" # @6.5.8
pin "crelt" # @1.0.6
pin "@codemirror/lang-yaml", to: "@codemirror--lang-yaml.js" # @6.1.1
pin "@lezer/lr", to: "@lezer--lr.js" # @1.4.2
pin "@lezer/yaml", to: "@lezer--yaml.js" # @1.0.3
pin "@codemirror/lang-liquid", to: "@codemirror--lang-liquid.js" # @6.2.2
pin "@codemirror/lang-css", to: "@codemirror--lang-css.js" # @6.3.1
pin "@codemirror/lang-html", to: "@codemirror--lang-html.js" # @6.4.9
pin "@codemirror/lang-javascript", to: "@codemirror--lang-javascript.js" # @6.2.2
pin "@lezer/css", to: "@lezer--css.js" # @1.1.9
pin "@lezer/html", to: "@lezer--html.js" # @1.3.10
pin "@lezer/javascript", to: "@lezer--javascript.js" # @1.4.19
pin "@codemirror/language", to: "@codemirror--language.js" # @6.10.6
pin "@codemirror/state", to: "@codemirror--state.js" # @6.4.1
pin "@codemirror/view", to: "@codemirror--view.js" # @6.35.0
pin "@lezer/common", to: "@lezer--common.js" # @1.2.3
pin "@lezer/highlight", to: "@lezer--highlight.js" # @1.2.1
pin "style-mod" # @4.1.2
pin "w3c-keyname" # @2.2.8
pin "@fsegurai/codemirror-theme-github-dark", to: "@fsegurai--codemirror-theme-github-dark.js" # @6.1.1
pin "@fsegurai/codemirror-theme-github-light", to: "@fsegurai--codemirror-theme-github-light.js" # @6.1.1
# ActiveAdmin
pin "@rails/ujs", to: "@rails--ujs.js", preload: false # @7.1.3
pin_all_from File.join(`bundle show activeadmin`.strip, "app/javascript/active_admin"), under: "active_admin", preload: false
