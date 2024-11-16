import type { Schema, Struct } from '@strapi/strapi';

export interface ArticlesAds extends Struct.ComponentSchema {
  collectionName: 'components_articles_ads';
  info: {
    description: '';
    displayName: 'ads';
  };
  attributes: {
    author: Schema.Attribute.String & Schema.Attribute.Required;
    cover: Schema.Attribute.String & Schema.Attribute.Required;
    summary: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ArticlesContentAd extends Struct.ComponentSchema {
  collectionName: 'components_articles_content_ads';
  info: {
    description: '';
    displayName: 'ContentAd';
  };
  attributes: {
    ad: Schema.Attribute.String & Schema.Attribute.Required;
    img: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutsAds extends Struct.ComponentSchema {
  collectionName: 'components_layouts_ads';
  info: {
    description: '';
    displayName: 'ads';
  };
  attributes: {
    ad: Schema.Attribute.String & Schema.Attribute.Required;
    img: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutsFooters extends Struct.ComponentSchema {
  collectionName: 'components_layouts_footers';
  info: {
    description: '';
    displayName: 'footers';
  };
  attributes: {
    describe: Schema.Attribute.String;
    footer: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface LayoutsGadgets extends Struct.ComponentSchema {
  collectionName: 'components_gadgets_gadgets';
  info: {
    description: '';
    displayName: 'gadgets';
  };
  attributes: {
    qrcode: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutsLinks extends Struct.ComponentSchema {
  collectionName: 'components_layouts_links';
  info: {
    description: '';
    displayName: 'links';
  };
  attributes: {
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutsNavs extends Struct.ComponentSchema {
  collectionName: 'components_layouts_navs';
  info: {
    description: '';
    displayName: 'navs';
  };
  attributes: {
    badge: Schema.Attribute.String;
    nav: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'articles.ads': ArticlesAds;
      'articles.content-ad': ArticlesContentAd;
      'layouts.ads': LayoutsAds;
      'layouts.footers': LayoutsFooters;
      'layouts.gadgets': LayoutsGadgets;
      'layouts.links': LayoutsLinks;
      'layouts.navs': LayoutsNavs;
    }
  }
}
