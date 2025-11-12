/**
 * `landing-page` middleware
 */

import type { Core } from "@strapi/strapi";

const populate = {
  blocks: {
    on: {
      "blocks.hero": {
        populate: {
          links: true,
          image: {
            fields: ["alternativeText", "url"],
          },
        },
      },
      "blocks.section-heading": true,

      "blocks.card-grid": {
        populate: {
          card: {
            populate: ["image"],
          },
        },
      },

      "blocks.content-with-image": {
        populate: {
          link: true,
          image: {
            fields: ["alternativeText", "url"],
          },
        },
      },

      "blocks.faqs": {
        populate: {
          faqs: true,
        },
      },

      // ⬇️ ini yang kamu mau
      "blocks.solution-tabs": {
        populate: {
          tabs: {
            populate: {
              image: true,
              bullets: true,
              result: true,
            }, 
          },
        },
      },

"blocks.product": {
  populate: {
    card: {
      populate: {
        image: { fields: ["url", "alternativeText", "width", "height"] },
        link: true,
      },
    },
  },
},

  },
},
};
export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In landing-page-populate middleware.");
ctx.query.populate = populate
    await next();
  };
};
