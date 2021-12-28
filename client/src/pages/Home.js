import Cart from '../components/Cart';

const Home = () => {
    return (
        <div className="container">
        <CategoryMenu />
        <ProductList />
        <Cart />
      </div>
    );
  };