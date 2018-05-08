import {
  getFeature,
  queryFeatures,
  addFeatures,
  updateFeatures,
  deleteFeatures
} from "../src/index";

import * as fetchMock from "fetch-mock";

import {
  featureResponse,
  queryResponse,
  addFeaturesResponse,
  updateFeaturesResponse,
  deleteFeaturesResponse
} from "./mocks/feature";

describe("feature", () => {
  afterEach(fetchMock.restore);

  it("should return a feature by id", done => {
    const params = {
      url:
        "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0",
      id: 42
    };
    fetchMock.once("*", featureResponse);
    getFeature(params).then(response => {
      expect(fetchMock.called()).toBeTruthy();
      const [url, options]: [string, RequestInit] = fetchMock.lastCall("*");
      expect(url).toEqual(`${params.url}/42?f=json`);
      expect(options.method).toBe("GET");
      expect(response.attributes.FID).toEqual(42);
      done();
    });
  });

  it("should supply default query parameters", done => {
    const requestOptions = {
      url:
        "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0"
    };
    fetchMock.once("*", queryResponse);
    queryFeatures(requestOptions).then(response => {
      expect(fetchMock.called()).toBeTruthy();
      const [url, options]: [string, RequestInit] = fetchMock.lastCall("*");
      expect(url).toEqual(
        `${requestOptions.url}/query?f=json&where=1%3D1&outFields=*`
      );
      expect(options.method).toBe("GET");
      // expect(response.attributes.FID).toEqual(42);
      done();
    });
  });

  it("should use passed in query parameters", done => {
    const requestOptions = {
      url:
        "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0",
      params: {
        where: "Condition='Poor'",
        outFields: ["FID", "Tree_ID", "Cmn_Name", "Condition"]
      }
    };
    fetchMock.once("*", queryResponse);
    queryFeatures(requestOptions).then(response => {
      expect(fetchMock.called()).toBeTruthy();
      const [url, options]: [string, RequestInit] = fetchMock.lastCall("*");
      expect(url).toEqual(
        `${
          requestOptions.url
        }/query?f=json&where=Condition%3D'Poor'&outFields=FID%2CTree_ID%2CCmn_Name%2CCondition`
      );
      expect(options.method).toBe("GET");
      // expect(response.attributes.FID).toEqual(42);
      done();
    });
  });

  it("should return objectId of the added feature and a truthy success", done => {
    const requestOptions = {
      url:
        "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0",
      updates: {
        features: [
          {
            geometry: {
              x: -9177311.62541634,
              y: 4247151.205222242,
              spatialReference: {
                wkid: 102100,
                latestWkid: 3857
              }
            },
            attributes: {
              Tree_ID: 102,
              Collected: 1349395200000,
              Crew: "Linden+ Forrest+ Johnny",
              Status: "P",
              Spp_Code: "ULPU",
              Land_Use: "I",
              Ht_DBH_ft: 4.5,
              DBH1: 41,
              DBH2: 0,
              DBH3: 0,
              DBH4: 0,
              DBH5: 0,
              DBH6: " ",
              Height: 74,
              Live_Top: 74,
              Crown_Base: 21,
              Width_NS: 75,
              Width_EW: 40,
              Cn_Missing: 10,
              Cn_DieBack: 15,
              CLE: 2,
              Tree_Site: "S",
              Tree_Age: " ",
              Notes: " ",
              Cmn_Name: "Siberian elm",
              Sci_Name: "Ulmus pumila",
              GroundArea: 2596,
              Condition: "Fair",
              Leaf_Area: 10295,
              Leaf_Bmass: 144,
              LAI: 3.96,
              C_Storage: 6771,
              C_Seq: 95,
              S_Value: "3,079.00",
              Street: "YES",
              Native: "NO",
              CO_Rmvd: 5.06,
              O3_Rmvd: 470.97,
              NO2_Rmvd: 39.24,
              PM10_Rmvd: 343.45,
              SO2_Rmvd: 27.64,
              PM2p5_Rmvd: 47.84,
              CO_RVlu: 0.01,
              O3_Rvlu: 0.42,
              NO2_Rvlu: 0,
              PM10_Rvlu: 3.73,
              SO2_Rvlu: 0,
              PM2p5_RVlu: 1.99,
              Isoprene_E: 2.7,
              Monoterp_E: 13.2,
              Vocs_E: 15.9,
              Dedication: " ",
              Longitude: -82.441189,
              Latitude: 35.610441,
              Crown_Height: 53
            }
          }
        ]
      }
    };
    fetchMock.once("*", addFeaturesResponse);
    addFeatures(requestOptions).then(response => {
      expect(fetchMock.called()).toBeTruthy();
      const [url, options]: [string, RequestInit] = fetchMock.lastCall("*");
      expect(url).toEqual(`${requestOptions.url}/addFeatures`);
      expect(addFeaturesResponse.addResults[0].objectId).toEqual(1001);
      expect(addFeaturesResponse.addResults[0].success).toEqual(true);
      expect(options.method).toBe("POST");
      done();
    });
  });

  it("should return objectId of the updated feature and a truthy success", done => {
    const requestOptions = {
      url:
        "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0",
      updates: {
        features: [
          {
            attributes: {
              OBJECTID: 1001,
              Street: "NO",
              Native: "YES"
            }
          }
        ]
      }
    };
    fetchMock.once("*", updateFeaturesResponse);
    updateFeatures(requestOptions).then(response => {
      expect(fetchMock.called()).toBeTruthy();
      const [url, options]: [string, RequestInit] = fetchMock.lastCall("*");
      expect(url).toEqual(`${requestOptions.url}/updateFeatures`);
      expect(updateFeaturesResponse.updateResults[0].objectId).toEqual(
        requestOptions.updates.features[0].attributes.OBJECTID
      );
      expect(updateFeaturesResponse.updateResults[0].success).toEqual(true);
      expect(options.method).toBe("POST");
      done();
    });
  });

  it("should return objectId of the deleted feature and a truthy success", done => {
    const requestOptions = {
      url:
        "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0",
      updates: {
        objectIds: [1001]
      }
    };
    fetchMock.once("*", deleteFeaturesResponse);
    deleteFeatures(requestOptions).then(response => {
      expect(fetchMock.called()).toBeTruthy();
      const [url, options]: [string, RequestInit] = fetchMock.lastCall("*");
      expect(url).toEqual(`${requestOptions.url}/deleteFeatures`);
      expect(deleteFeaturesResponse.deleteResults[0].objectId).toEqual(
        requestOptions.updates.objectIds[0]
      );
      expect(deleteFeaturesResponse.deleteResults[0].success).toEqual(true);
      expect(options.method).toBe("POST");
      done();
    });
  });
});
