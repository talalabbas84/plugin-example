import translationsFile from "../i18n/index.js";
import seedExampleTemplate from "./seedExampleTemplate.js";

/**
 * @summary Creates a collection of translations used for our Example.
 * @param {Object} ExampleTemplateCollection MongoDB collection that will be seeded into
 * @returns {undefined}
 */
export default async function seedExampleTemplateCollection(ExampleTemplateCollection) {

  // Create promises that we will resolve once we have added all documents to the mongoDB collection
  const promises = translationsFile.translations.map((translationObject) => (
    seedExampleTemplate(ExampleTemplateCollection, translationObject)
  ));

  // Resolve the promises once all imports are done
  await Promise.all(promises);
}