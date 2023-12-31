import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import { useGetProductById } from '../hooks/useProducts';

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const {productData} = useGetProductById(id)
  return (
    <Card key={productData.id} style={{ width: '18rem' }}>
    <Link to={`/item/${productData.id}`}>            
    <Card.Img variant="top" src={productData.thumbnail} />
    </Link>
    <Card.Body>
      <Card.Title>{productData.title}</Card.Title>
      <Card.Text>
        {productData.description}
      </Card.Text>
       
      
      {productData.images &&
        productData.images.map((image, index) => (
          <Card.Img key={index} variant="top" src={image} />
        ))}
    
      <div>
        {productData.price}
      </div>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>

  )
        }

