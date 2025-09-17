
import { getTranslations } from 'next-intl/server';
 
type PageProps = {
  params: Promise<{ locale: string }>;
};
export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale ,namespace: 'Index'});
  return <h1>{t('title')}</h1>;
}
