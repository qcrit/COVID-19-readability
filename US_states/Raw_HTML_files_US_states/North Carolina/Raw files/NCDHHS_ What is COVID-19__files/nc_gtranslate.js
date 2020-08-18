function googleTranslateElementInit() {
  jQuery('#google_translate_element').empty();
  new google.translate.TranslateElement(
    {
      pageLanguage: 'en',
      includedLanguages: Drupal.settings.nc_gtranslate.languages,
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    },
    'google_translate_element'
  );
}
