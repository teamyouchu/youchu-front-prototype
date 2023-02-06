import FirstHeader from './FirstHeader';

export default function Layout({ children }: any) {
  return (
    <>
      <FirstHeader />
      <div>{children}</div>
    </>
  );
}
