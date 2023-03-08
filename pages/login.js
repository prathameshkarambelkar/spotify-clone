import { getProviders, signIn } from "next-auth/react";
function Login({ providers }) {
  return (
    <div>
      <h1> Login Function</h1>
      {Object.values(providers).map((provider) => (
        <div key={provider.name} className="top-auto   right-10 cursor-pointer">
          <button
            onClick={() => signIn(provider.id, {callbackUrl: "/"}
            )}
            className=" bg-green-700 rounded-full p-5"
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
