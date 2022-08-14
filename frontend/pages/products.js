import Link from 'next/Link';
import React from 'react';

const Products = (props) => {
  return (
    <div classNameName="container mx-auto px-5">
      <section className="text-gray-600 body-font">
        <div className="container px-12 py-12 mx-auto">
          <div className="flex flex-wrap w-full mb-10">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Product Lsit - My Shop</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {props.products.data.map(product => {
              return (
                <div className="xl:w-1/4 md:w-1/2 p-4" key={product.id}>
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img className="h-[13rem] rounded w-auto mx-auto object-cover object-center mb-6" src={product.attributes.image.data && product.attributes.image.data.attributes.name} alt="content" />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{product.attributes.category}</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-1">{product.attributes.title}</h2>
                    <p className="leading-relaxed text-base mb-4">Rs.{product.attributes.price}/- </p>
                    <p className="leading-relaxed text-base">{product.attributes.description.slice(0, 50)}...</p>
                    <div className="flex mb-1">
                      <span className="mr-2">Color</span>
                      <div className='bg-red-800 bg-blue-800 bg-green-800 bg-purple-800 bg-neutral-50 bg-gray-900'></div>
                      <button className={"border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none " + `bg-${product.attributes.color}-800`}></button>
                    </div>
                    <Link href={`/product/${product.attributes.slug}`}><button className="mt-2 md:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm">Buy Now →</button></Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

// Getting the products as props from the server
export async function getServerSideProps() {
  const headers = { Authorization: 'Bearer b0b430ecc991bbbbee1fb22c20bccb044cdaf15177ab216a334c7e932b13f89532031129bcd349b62b09fe281fbaf0c41d9d42b658a6085b94fd70cf270c17d6c27fe2ec700e2136486cca6f85313caaa28764cfd0cb6336f87b79b93631226a35d546b66e0f382eacca04a995e044ecef132b55d2cb7b410aa636a463c82c8f' };
  // Fetching an API
  let res = await fetch('http://localhost:1337/api/products?populate=*', { headers: headers });
  const products = await res.json();
  console.log(products);

  return {
    props: { products: products }, // will be passed to the page component as props
  };
}
export default Products;