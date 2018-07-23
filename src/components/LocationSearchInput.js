//API key: AIzaSyA1Gj-DvPPspsb7CQatAgCA4p-QvE8DaRc
//Key must be passed with each request as the value of a key parameter
//https://maps.googleapis.com/maps/api/place/nearbysearch/json
//  ?location=-33.8670522,151.1957362
//  &radius=500
//  &types=food
//  &name=harbour
//  &key=YOUR_API_KEY
import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import ReactGoogleMapLoader from "react-google-maps-loader";
/*import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
*/
class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  };

  componentDidMount() {
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyA1Gj-DvPPspsb7CQatAgCA4p-QvE8DaRc&callback=initMap');
  }
  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
  geocodeByAddress(address)
    .then(results => getLatLng(results[0]))
    .then(latLng => console.log('Success', latLng))
    .catch(error => console.error('Error', error));
  };

  render() {
    return (
      <div></div>
      /*<PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';

                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>*/
    );
  }
}

export default LocationSearchInput;
