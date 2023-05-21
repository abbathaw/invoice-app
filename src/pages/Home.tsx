import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div>
      <h3 className="greeting">Welcome to the invoice app</h3>
      <div className="container home-desc">
        These are the main pages for your use
        <ul className="list-pages">
          <li>
            <h4>
              <FontAwesomeIcon icon={faFileInvoiceDollar} />
              <span>Invoices</span>
            </h4>
            <p>View project invoices </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
