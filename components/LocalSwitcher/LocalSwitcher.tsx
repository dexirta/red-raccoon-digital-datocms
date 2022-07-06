import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';

export const LocalSwitcher = (): JSX.Element => {
  const router = useRouter();
  const { locale, locales } = router;

  console.log(locale, locales);

  const changeLanguage = (event: ChangeEvent): void => {
    const locale = (event.currentTarget as HTMLInputElement).value;
    router.push(router.pathname, router.asPath, { locale });
  };
  return (
    <section className="flex-row flex items-center mr-2">
      <select
        onChange={changeLanguage}
        defaultValue={locale}
        className="text-xs bg-transparent appearance-none cursor-pointer"
      >
        {locales?.map((el, i) => (
          <option key={i} value={el}>
            {el.toLocaleUpperCase()}
          </option>
        ))}
      </select>
    </section>
  );
};
