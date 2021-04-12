import React, { Component } from "react";
import { Route } from "react-router-dom";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import CollectionOverview from "../../components/collection-overview/CollectionOverview.component";
import Collection from "../collection/Collection.component";
import { setCollections } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";
import WithSpinner from "../../components/withSpinner/WithSpinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends Component {
  state = { isLoading: true };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { setCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        setCollections(collectionsMap);

        this.setState({ isLoading: false });
      }
    );
  }

  componentWillUnmount() {}

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div>
        <Route
          exact
          path={match.path}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCollections: (collections) => dispatch(setCollections(collections)),
});

export default connect(undefined, mapDispatchToProps)(ShopPage);
