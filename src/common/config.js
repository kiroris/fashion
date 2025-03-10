class Config {
  defaults = {
    overrideStorage: false,
    /*tabsBackground: {
      type: "image",
      value: "url(src/img/test.jpg)",
      size: "cover",
      repeat: "no-repeat",
      position: "center"
    },*/
    crypto: {
      currency: 'USD',
      coin: 'ETH',
      refreshIn: 15
    },
    temperature: {
      location: 'Belarus, Gomel',
      scale: 'C'
    },
    clock: {
      format: 'h:i p',
      iconColor: '#ea6962'
    },
    search: {
      engines: {
        g: ['https://google.com/search?q=', 'Google'],
        y: ['https://youtube.com/results?search_query=', 'Youtube'],
      }
    },
    disabled: [],
    openLastVisitedTab: false,
    tabs: [],
    keybindings: {
      "s": 'search-bar'
    }
  };

  config;

  constructor(config) {
    this.config = config;
    this.storage = new Storage('config');

    this.autoConfig();
    this.setKeybindings();
    this.save();

    /*// Initialize background when config is loaded.
    this.updateBackground();*/

    return new Proxy(this, {
      ...this,
      __proto__: this.__proto__,
      set: (target, prop, value) =>
        this.settingUpdatedCallback(target, prop, value)
    });
  }

  /*/**
   * Update the background based on current config.
   * @returns {void}
   *
  updateBackground() {
    const tabsList = document.querySelector('tabs-list');
    if (!tabsList) return;

    const bgConfig = this.config.tabsBackground;
    
    if (bgConfig.type === "image") {
      tabsList.style.backgroundImage = bgConfig.value;
      tabsList.style.backgroundColor = 'transparent';
    } else if (bgConfig.type === "color") {
      tabsList.style.backgroundImage = 'none';
      tabsList.style.backgroundColor = bgConfig.value;
    }

    tabsList.style.backgroundSize = bgConfig.size || 'cover';
    tabsList.style.backgroundRepeat = bgConfig.repeat || 'no-repeat';
    tabsList.style.backgroundPosition = bgConfig.position || 'center';
  }

  /**
   * Set background configuration and update display.
   * @param {Object} newBackground - New background configuration
   * @returns {void}
   *
  setBackground(newBackground) {
    this.config.tabsBackground = {
      ...this.config.tabsBackground,
      ...newBackground
    };
    
    this.updateBackground();
    this.save();
  }*/

  /**
   * Automatically save whenever a config property is updated.
   * @returns {void}
   */
  settingUpdatedCallback(target, prop, val) {
    if (!(prop in target)) return false;

    Reflect.set(target, prop, val);
    Object.assign(this, target);

    /*// Update background if tabsBackground was changed.
    if (prop === 'tabsBackground') {
      this.updateBackground();
    }*/

    this.save();

    return true;
  }

  /**
   * Set default config values or load them from the local storage.
   * @returns {void}
   */
  autoConfig() {
    Object.keys(this.defaults).forEach(setting => {
      if (this.canOverrideStorage(setting))
        this[setting] = this.config[setting];
      else
        if (this.storage.hasValue(setting))
          this[setting] = this.storage.get(setting);
        else
          this[setting] = this.defaults[setting];
    });
  }

  /**
   * Determines whether the localStorage can be overridden.
   * If the setting is for the tabs section, always override.
   * @returns {bool}
   */
  canOverrideStorage(setting) {
    return setting in this.config && (this.config.overrideStorage || setting === 'tabs');
  }

  /**
   * Deserialize the configuration object.
   * @returns {Object}
   */
  toJSON() {
    return { ...this, defaults: undefined };
  }

  /**
   * Trigger keybinding actions.
   * @returns {void}
   */
  setKeybindings() {
    document.onkeypress = ({ key }) => {
      if (document.activeElement !== document.body) return;

      if (Object.keys(this.config.keybindings).includes(key))
        Actions.activate(this.config.keybindings[key]);
    };
  }

  save() {
    this.storage.save(stringify(this));
  }

  exportSettings() {
    const anchor = document.createElement('a');
    const filename = 'dawn.config.json';
    const mimeType = 'data:text/plain;charset=utf-8,';

    anchor.href = mimeType + encodeURIComponent(stringify(this, null, 2));
    anchor.download = filename;

    anchor.click();
  }
}

/*// Initialize background when DOM is loaded.
document.addEventListener('DOMContentLoaded', () => {
  if (window.CONFIG) {
    CONFIG.updateBackground();
  }
});*/