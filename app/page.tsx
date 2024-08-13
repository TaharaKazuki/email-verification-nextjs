import SubscribeForm from '@/components/SubscribeForm';

export default function Home() {
  return (
    <div className="min-w-[300px]">
      <h1 className="mb-10 text-4xl font-semibold tracking-tight">
        Email Confirmation Demo
      </h1>
      <SubscribeForm />
    </div>
  );
}
