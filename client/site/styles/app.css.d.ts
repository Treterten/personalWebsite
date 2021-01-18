declare namespace AppCssNamespace {
  export interface IAppCss {
    aboutMe: string;
    aboutMeBye: string;
    appear: string;
    mainView: string;
    modal: string;
    quickLinks: string;
    "scale-down-center": string;
    welcomeMessage: string;
  }
}

declare const AppCssModule: AppCssNamespace.IAppCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AppCssNamespace.IAppCss;
};

export = AppCssModule;
