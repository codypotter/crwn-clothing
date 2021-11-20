import React from 'react'
import {Route} from 'react-router-dom'
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "../collection/collection.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import {fetchCollectionsStartAsync} from "../../redux/shop/shop.actions";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {

    componentDidMount() {
        fetchCollectionsStartAsync()
    }

    render() {
        const { match } = this.props
        const { loading } = this.state
        return (
            <div className='shop-page'>
                <Route exact
                       path={`${ match.path }`}
                       render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}/>
                <Route path={`${ match.path }/:collectionId`}
                       render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)