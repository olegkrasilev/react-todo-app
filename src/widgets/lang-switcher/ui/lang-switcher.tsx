import Select, { SingleValue } from 'react-select';

import i18n from 'shared/config/i18n';

export const LangSwitcher = () => {
  const langSwitcherHandler = (
    newValue: SingleValue<{
      label: string;
      value: string;
    }>,
  ) => {
    if (newValue) {
      void i18n.changeLanguage(newValue.value);
    }
  };

  const options = [
    { value: 'ru', label: 'Русский' },
    { value: 'en', label: 'English' },
  ];

  return (
    <Select
      options={options}
      onChange={langSwitcherHandler}
      defaultValue={{ label: 'English', value: 'en' }}
      styles={{
        container: (baseStyles) => ({
          ...baseStyles,
          width: 115,
        }),
      }}
      isSearchable={false}
    />
  );
};
