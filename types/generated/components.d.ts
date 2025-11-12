import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_card_grids';
  info: {
    displayName: 'Card Grid';
  };
  attributes: {
    card: Schema.Attribute.Component<'shared.card', true>;
  };
}

export interface BlocksContentWithImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_content_with_images';
  info: {
    displayName: 'Content With Image';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images', true>;
    link: Schema.Attribute.Component<'shared.link', false>;
    reserved: Schema.Attribute.Boolean;
  };
}

export interface BlocksFaqs extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faqs';
  info: {
    displayName: 'Faqs';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'shared.cardss', true>;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    links: Schema.Attribute.Component<'shared.link', true>;
    text: Schema.Attribute.RichText;
  };
}

export interface BlocksMarkdown extends Struct.ComponentSchema {
  collectionName: 'components_blocks_markdowns';
  info: {
    displayName: 'Markdown';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface BlocksProduct extends Struct.ComponentSchema {
  collectionName: 'components_blocks_products';
  info: {
    displayName: 'Product';
  };
  attributes: {
    card: Schema.Attribute.Component<'shared.cardss', true>;
  };
}

export interface BlocksSectionHeading extends Struct.ComponentSchema {
  collectionName: 'components_blocks_section_headings';
  info: {
    displayName: 'Section Heading';
  };
  attributes: {
    anchorLink: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
  };
}

export interface BlocksSolutionTabs extends Struct.ComponentSchema {
  collectionName: 'components_blocks_solution_tabs';
  info: {
    displayName: 'Solution Tabs';
  };
  attributes: {
    tabs: Schema.Attribute.Component<'blocks.solutions-tab-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksSolutionsTabItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_solutions_tab_items';
  info: {
    displayName: 'Solutions Tab Item';
  };
  attributes: {
    bullets: Schema.Attribute.Component<'shared.bullets', true>;
    image: Schema.Attribute.Media<'images'>;
    key: Schema.Attribute.String;
    label: Schema.Attribute.String;
    result: Schema.Attribute.Component<'shared.bullets', true>;
    result_title: Schema.Attribute.String;
  };
}

export interface BlocksTab extends Struct.ComponentSchema {
  collectionName: 'components_blocks_tabs';
  info: {
    displayName: 'tab';
  };
  attributes: {
    tabs: Schema.Attribute.Component<'blocks.solutions-tab-item', true>;
  };
}

export interface LayoutBanner extends Struct.ComponentSchema {
  collectionName: 'components_layout_banners';
  info: {
    displayName: 'Banner';
    icon: 'apps';
  };
  attributes: {
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.Component<'shared.link', false>;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    icon: 'crown';
  };
  attributes: {
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
    navItems: Schema.Attribute.Component<'shared.link', true>;
    socialLinks: Schema.Attribute.Component<'shared.logo-link', true>;
    text: Schema.Attribute.String;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', true>;
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
    navItems: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface MenuDropdownn extends Struct.ComponentSchema {
  collectionName: 'components_menu_dropdownns';
  info: {
    displayName: 'Dropdownn';
    icon: 'command';
  };
  attributes: {
    description: Schema.Attribute.String;
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface SharedBullets extends Struct.ComponentSchema {
  collectionName: 'components_shared_bullets';
  info: {
    displayName: 'bullets';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'shared.link', false>;
    text: Schema.Attribute.Text;
  };
}

export interface SharedCardss extends Struct.ComponentSchema {
  collectionName: 'components_shared_cardsses';
  info: {
    displayName: 'Cards';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    key: Schema.Attribute.String;
    link: Schema.Attribute.Component<'shared.link', true>;
    text: Schema.Attribute.Text;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isButtonLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface SharedLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_links';
  info: {
    displayName: 'Logo ';
    icon: 'crown';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedNav extends Struct.ComponentSchema {
  collectionName: 'components_shared_navs';
  info: {
    displayName: 'Navigation';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['PRIMARY']>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.card-grid': BlocksCardGrid;
      'blocks.content-with-image': BlocksContentWithImage;
      'blocks.faqs': BlocksFaqs;
      'blocks.hero': BlocksHero;
      'blocks.markdown': BlocksMarkdown;
      'blocks.product': BlocksProduct;
      'blocks.section-heading': BlocksSectionHeading;
      'blocks.solution-tabs': BlocksSolutionTabs;
      'blocks.solutions-tab-item': BlocksSolutionsTabItem;
      'blocks.tab': BlocksTab;
      'layout.banner': LayoutBanner;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'menu.dropdownn': MenuDropdownn;
      'shared.bullets': SharedBullets;
      'shared.card': SharedCard;
      'shared.cardss': SharedCardss;
      'shared.link': SharedLink;
      'shared.logo-link': SharedLogoLink;
      'shared.media': SharedMedia;
      'shared.nav': SharedNav;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
