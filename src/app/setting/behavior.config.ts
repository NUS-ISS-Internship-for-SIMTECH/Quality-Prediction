// Consolidated list of customizable behavior
// Change the function body, not the signature

// The purpose of having this list is to allow developers to customize
// function behavior built into the template without modifying the template

// This will allow us to push template changes without affecting development of individual apps

// SECTION: BASIC APP INFO
export const YOUR_APP_NAME = 'Quality Prediction';

export const TARGET = '90';

// SECTION: APP Options
export const APP_OPTIONS = {
  i18n: {
    isSelectionEnabled: true, //false,
    default: 'en-US',
    supported: [
      { text: 'English', value: 'en-US' },
      { text: 'Chinese', value: 'ZH-cn' },
    ],
  },
  blockUI: {
    type: 'converging-spinner',
    // themeColor: 'primary',
    size: 'large',
    message: 'common.block-ui.loading-message',
  },
  sidemenu: {
    isSelected: true,
    collapsedByDefault: false, // determines whether menu is open by default
    panelItemCollapsedByDefault: true, // Determines whether panel items should be collapsed by default; True = Collapsed
  },
  darkmode: {
    isDefaultDarkMode: false,
    className: 'dark-mode',
  },
};
