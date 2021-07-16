/**
 * @name getSlogan
 * @method
 * @memberof GraphQL/ExampleTemplateCollection
 * @summary Query the slogan based on the right langauge
 * @param {Object} context - an object containing the per-request state
 * @param {String} language - Language that needs to be returned
 */
 export default async function getSlogan(context, languageCode) {
    // We can find our collection by looking into context
    const { ExampleTemplateCollection } = context.collections;
  
    return ExampleTemplateCollection.findOne({
        i18n: languageCode
    });
  }