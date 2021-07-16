// import pkg from "../package.json";

// /**
//  * @summary Import and call this function to add this plugin to your API.
//  * @param {ReactionAPI} app The ReactionAPI instance
//  * @returns {undefined}
//  */
// export default async function register(app) {
//   await app.registerPlugin({
//     label: "Plugin Example",
//     name: "plugin-example",
//     version: pkg.version
//   });
// }



import startup from "./startup.js";

/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {ReactionAPI} app ReactionAPI instance
 * @returns {undefined}
 */
export default async function register(app) {
    /**
     * Simple Ping Pong like example plugin
     * Allows the user to query HybrIT and return the slogan with desired language
     */
    await app.registerPlugin({
      label: "Plugin Example",
      name: "plugin-example",
      functionsByType: {
          startup: [startup]
      },
      collections: {
        // Make sure that the object key name is the same as the name value.
        ExampleTemplateCollection: {
              name: "ExampleTemplateCollection"
          }
      }
    });
  }