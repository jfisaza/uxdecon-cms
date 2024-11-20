import type { Schema, Struct } from '@strapi/strapi';

export interface BoxBox extends Struct.ComponentSchema {
  collectionName: 'components_box_boxes';
  info: {
    description: '';
    displayName: 'Box';
    icon: 'archive';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ButonsButton extends Struct.ComponentSchema {
  collectionName: 'components_butons_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    link: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'box.box': BoxBox;
      'butons.button': ButonsButton;
    }
  }
}
