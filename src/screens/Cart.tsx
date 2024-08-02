import React from 'react'
import { Button, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import CartComp from '../components/Home/CartComp';
import { decrementItem, incrementItem, removeItemFromCart } from '../redux/actions/cartAction';
import { useNavigation } from '@react-navigation/native';
const screenHeight = Dimensions.get('window').height;


const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducers || []);
  console.log('-------', cartItems, '------')
  const navigation = useNavigation()
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (product) => {
    dispatch(incrementItem(product._id));
  };

  const handleDecreaseQuantity = (product) => {
    dispatch(decrementItem(product._id));
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeItemFromCart(productId));
  };
  const items = useSelector(state => state)
  return (
    <View style={styles.container}>
      <View>
      {
        cartItems.length > 0 ? (
          cartItems.map((product) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductDetail', { productId: product._id })}
        >
          <View style={styles.cartItem}>
            <Image source={{ uri: product.thumbnail }} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product.title}</Text>
              <Text style={styles.productStock}>Stock: {product.stock}</Text>
              <View style={styles.buttonContainer}>
                <Button title="+" onPress={() => handleIncreaseQuantity(product)} />
                <Text style={styles.quantityText}>{product.quantity}</Text>
                <Button title="-" onPress={() => handleDecreaseQuantity(product)} />
                <TouchableOpacity onPress={() => handleRemoveItem(product.id)} style={styles.removeButton}>
                  {/* Uncomment the next line if you have an icon library */}
                  {/* <Icon name="trash-can" size={24} color="red" /> */}
                  <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableOpacity>
          ))
        ) : (
          <View><Text style={styles.cartEmpty}>Cart is empty</Text></View>
        )
      }
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#E9EDED',
    justifyContent: 'space-between',
    height: screenHeight
  },
  cartItem: {
    flexDirection: 'row',
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  productStock: {
    fontSize: 14,
    color: '#888',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 8,
    color: '#333',
  },
  removeButton: {
    marginLeft: 'auto',
    padding: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
    marginTop: 16,
  },
  cartEmpty: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center'
  }
});