#Running-gear

Running gear is a simple reac project completed for coderhouse.
In this project react was utilized to create a template for ecomerce website.
Firestore and Vercel were implemented for database storage and deployment respectively. 

The sctructure of the page is divided into the cart and product areas.
Both of these pages are updated dynamically by quering firestore through its api: 

```
 const updateStock = async (id) => {
        let current = stock - count
        var db = getFirestore();
        const shoe = doc(db, 'items', id);
        await updateDoc(shoe, { stock: current })
    }
```

With the data obtained we can prevent the page from having propdrilling by implementing a cart context which allows us to have access to the cart object and its methods across each product page.
```
export const CartContext = createContext({});
const { Provider } = CartContext
```

The product pages implemented routing that allows dynamic pages
```
 <Route path="/category/:categoryId" element={<ItemListContainer />} />
 <Route path="/item/:itemId" element={<ItemDetailContainer />} />
```

For styling, tailwind was used and thirdpartie libraries such as hero-patterns added background color. It helped making the page responsive

react-modal was also implemented to create a simple pop up form. This form was also validated to make sure the order had the required fields

```
const validateEmail = () => {
        let email = document.submitOrder.cus_email.value
        if (email == "" || !email.includes('@')) {
            alert("please provide valid email")
            return false
        }
        return true
    }
    const validatePayment = () => {
        let pay = document.submitOrder.cus_pay.value
        if (pay == "" || pay.length < 12) {
            alert("please provide a valid payman card number")
            return false
        }
        return true
    }
    const validateForm = () => {
        return (validatePayment() && validateEmail() && validateNames())
    }
```

The cart was also sotred in localstorage to make sure no information was lost whenever the session ended and avoid to have more api calls to firestore
```
    const [initiallyFetched, setInitiallyFetched] = useState()

    useEffect(() => {
        let previousSession = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(previousSession)
        setInitiallyFetched(true)
    }, [])
    useEffect(() => {
        setCartSize(sizeCart)
        setCartPrice(getItemPrice)
        if (initiallyFetched) {
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    }, [cart])
```

Finally npm was utilized for packaing managment, eslint for clearer code and proptypes to validate react-components' props.


https://user-images.githubusercontent.com/49797284/176069109-c9bbb8f4-a05d-4bef-9fa8-55a126891a9f.mov

