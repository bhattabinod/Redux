// // import Home from "../Component/Home";
// // import { Connect } from "react-redux";
// // import { addToCart } from "../Service/actions/actions";

// // const mapStateToProps = state => ({

// // })

// // const mapDispatchToProps = dispatch => ({
// //     addToCartHandler: data => dispatch (addToCart(data))
// // })


// // export default Connect(mapStateToProps, mapDispatchToProps)(Home)

// import Home from '../Component/Home'
// import {connect} from 'react-redux'
// import {addToCart} from '../Service/actions/actions'

// const mapStateToProps=state=>({
//     data:state.cardItems
// })
// const mapDispatchToProps=dispatch=>({
//     addToCartHandler:data=>dispatch(addToCart(data))

// })
// export default connect(mapStateToProps,mapDispatchToProps)(Home)
// // export default Home;

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { purchaseBook } from '../Service/actions/actions'

const HomeContainers = () => {
    const Number = useSelector(state => state.Number_Of_Books)
    const dispatch = useDispatch()
  return (
    <>
        <div>Home Containers</div>
        <h1>Number of Books : {Number}</h1>

        <button onClick={()=>(dispatch(purchaseBook()))} >Buy Book</button>
    </>
    
  )
}

export default HomeContainers