/* eslint-disable @next/next/no-css-tags */
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Engkodok Games",
  description: "Static UI clone of Engkodok Games.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US">
      <head>
        <link rel="icon" href="/cloned-assets/wp-content/uploads/2022/03/cropped-57-px-01-180x180.png" />
        <link rel="stylesheet" href="/cloned-assets/wp-includes/css/dist/block-library/style.min.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/plugins/hover-effects/asset/css/hover.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/plugins/the-events-calendar/build/css/tribe-events-single-skeleton.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/plugins/the-events-calendar/build/css/tribe-events-single-full.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/plugins/the-events-calendar/build/css/integrations/plugins/elementor/widgets/widget-base.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/themes/neve/style-main-new.min.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/plugins/elementor/assets/css/frontend.min.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/uploads/elementor/css/post-554.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/uploads/elementor/google-fonts/css/roboto.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/uploads/elementor/google-fonts/css/robotoslab.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/plugins/smart-slider-3/Public/SmartSlider3/Application/Frontend/Assets/dist/smartslider.min.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/uploads/forminator/133_f8cf72e6a978c49beb6614323c2335e5/css/style-133.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/plugins/forminator/assets/forminator-ui/css/forminator-icons.min.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/plugins/forminator/assets/forminator-ui/css/src/forminator-utilities.min.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/plugins/forminator/assets/forminator-ui/css/src/grid/forminator-grid.open.min.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/plugins/forminator/assets/forminator-ui/css/src/form/forminator-form-flat.base.min.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-includes/css/buttons.min.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/plugins/elementor/assets/css/widget-spacer.min.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/plugins/elementor/assets/css/widget-heading.min.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/uploads/elementor/css/post-555.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/plugins/unlimited-elements-for-elementor/assets_libraries/font-awesome6/fontawesome-all.min.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/plugins/unlimited-elements-for-elementor/assets_libraries/font-awesome6/fontawesome-v4-shims.min.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/uploads/ac_assets/simple_animated_slider/slick.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/uploads/ac_assets/uc_flip_box_base/animations/ue-flipbox-styles.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/plugins/the-events-calendar/vendor/bootstrap-datepicker/css/bootstrap-datepicker.standalone.min.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/plugins/the-events-calendar/common/build/css/variables-skeleton.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/plugins/the-events-calendar/common/build/css/common-skeleton.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/plugins/the-events-calendar/common/vendor/tooltipster/tooltipster.bundle.min.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/plugins/the-events-calendar/build/css/views-skeleton.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/plugins/the-events-calendar/common/build/css/variables-full.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/plugins/the-events-calendar/common/build/css/common-full.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/plugins/the-events-calendar/build/css/views-full.css" />
        <link rel="stylesheet" href="/cloned-assets/wp-content/plugins/the-events-calendar/build/css/views-print.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
