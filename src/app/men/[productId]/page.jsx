// app/product/[id]/page.js
export async function generateStaticParams() {
    return [
      { params: { productId: '1' } },
      { params: { productId: '2' } },
      // Add more parameters as needed
    ];
  }
  
  export default function Page({ params }) {
    const { productId } = params;
              return <h1>Hello</h1>
              // ... Your page content
            }
  
