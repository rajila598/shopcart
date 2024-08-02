import React from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const CartComp = () => {
  return (
    <TouchableOpacity >
        <View style={styles.cartItem}>
          {/* <Image source={{ uri: imageUrl }} style={styles.productImage} /> */}
          <View style={styles.productInfo}>
            <Text style={styles.productName}>Name</Text>
            <Text style={styles.productStock}>Stock: stock</Text>
            <View style={styles.buttonContainer}>
              <Button title="+"  />
              <Text style={styles.quantityText}>qanti</Text>
              <Button title="-"  />
              <TouchableOpacity  style={styles.removeButton}>
                {/* <Icon name="trash-can" size={24} color="red" /> */}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    // <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}>
    //     <View style={styles.cartItem}>
    //       <Image source={{ uri: imageUrl }} style={styles.productImage} />
    //       <View style={styles.productInfo}>
    //         <Text style={styles.productName}>{productName}</Text>
    //         <Text style={styles.productStock}>Stock: {product.stock}</Text>
    //         <View style={styles.buttonContainer}>
    //           <Button title="+" onPress={() => handleIncreaseQuantity(product)} />
    //           <Text style={styles.quantityText}>{item.quantity}</Text>
    //           <Button title="-" onPress={() => handleDecreaseQuantity(product)} />
    //           <TouchableOpacity onPress={() => handleRemoveItem(product.id)} style={styles.removeButton}>
    //             {/* <Icon name="trash-can" size={24} color="red" /> */}
    //           </TouchableOpacity>
    //         </View>
    //       </View>
    //     </View>
    //   </TouchableOpacity>
  )
}

export default CartComp

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f9f9f9',
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
  });