import i18n from 'shared/config/i18n';

export const LangSwitcher = () => {
  const langSwitcherHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    void i18n.changeLanguage(event.target.value);
  };

  return (
    <select
      name='language'
      onChange={langSwitcherHandler}
    >
      <option value='en'>English</option>
      <option value='ru'>Русский</option>
    </select>
  );
};
