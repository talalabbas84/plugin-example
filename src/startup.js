// In this file, everything that requires to be done on startup can be done
// This can be for example setting up a collection or seeding data
// Note that this fuction wil run every single time when starting the project up with docker-compose in dev mode.
import Logger from "@reactioncommerce/logger";
import seedExampleTemplateCollection from "./util/seedExampleTemplateCollection.js"
/**
 * @name startup
 * @summary Called on startup
 * @param {Object} context App context
 * @returns {undefined}
 */
export default async function pluginTemplateStartup(context) {
    Logger.info("Reaction-Plugin-Template startup function started")

    // We can find our collection by looking into context
    const { ExampleTemplateCollection } = context.collections;

    // We will seed the data on every startup to make sure all of our translation files are added
    await seedExampleTemplateCollection(ExampleTemplateCollection)
  }