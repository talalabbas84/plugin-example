import Logger from "@reactioncommerce/logger";
import Random from "@reactioncommerce/random";

/**
 * @param {Object} ExampleTemplateCollection Collection that will be seeded into
 * @param {String} translationObject Object that contains our translation
 * @returns {undefined}
 */
export default async function seedExampleTemplateCollection(
    ExampleTemplateCollection,
    translationObject
) {
    // Look for an existing document
    const existing = await ExampleTemplateCollection.findOne({
        i18n: translationObject.i18n,
    });

    // If the document does not exist. We insert a new language doc
    if (!existing) {
        Logger.debug(
            `Adding the ${translationObject.language} language to the ExampleTemplateCollection`
        );
        await ExampleTemplateCollection.insertOne({
            ...translationObject,
            _id: Random.id(),
        });
    }
}