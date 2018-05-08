import { IFeature } from "@esri/arcgis-rest-common-types";

export const featureResponse = {
  feature: {
    attributes: {
      FID: 42
    },
    geometry: {
      x: -9177311.62541634,
      y: 4247151.205222242
    }
  }
};

export const queryResponse = {
  objectIdFieldName: "FID",
  globalIdFieldName: "",
  geometryType: "esriGeometryPoint",
  spatialReference: {
    wkid: 102100,
    latestWkid: 3857
  },
  // fields: [],
  features: [
    {
      attributes: {
        FID: 1,
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
    },
    {
      attributes: {
        FID: 2,
        Tree_ID: 103,
        Collected: 1349395200000,
        Crew: "Linden+ Forrest+ Johnny",
        Status: "P",
        Spp_Code: "ULPU",
        Land_Use: "I",
        Ht_DBH_ft: 4.5,
        DBH1: 55,
        DBH2: 0,
        DBH3: 0,
        DBH4: 0,
        DBH5: 0,
        DBH6: " ",
        Height: 70,
        Live_Top: 70,
        Crown_Base: 21,
        Width_NS: 90,
        Width_EW: 71,
        Cn_Missing: 5,
        Cn_DieBack: 15,
        CLE: 3,
        Tree_Site: "S",
        Tree_Age: " ",
        Notes: " ",
        Cmn_Name: "Siberian elm",
        Sci_Name: "Ulmus pumila",
        GroundArea: 5089,
        Condition: "Fair",
        Leaf_Area: 17078,
        Leaf_Bmass: 238,
        LAI: 3.36,
        C_Storage: 13228,
        C_Seq: 22,
        S_Value: "4,187.00",
        Street: "YES",
        Native: "NO",
        CO_Rmvd: 8.4,
        O3_Rmvd: 781.35,
        NO2_Rmvd: 65.1,
        PM10_Rmvd: 600.8,
        SO2_Rmvd: 45.86,
        PM2p5_Rmvd: 83.68,
        CO_RVlu: 0.01,
        O3_Rvlu: 0.69,
        NO2_Rvlu: 0.01,
        PM10_Rvlu: 6.53,
        SO2_Rvlu: 0,
        PM2p5_RVlu: 3.48,
        Isoprene_E: 4.47,
        Monoterp_E: 21.9,
        Vocs_E: 26.38,
        Dedication: " ",
        Longitude: -82.441107,
        Latitude: 35.610472,
        Crown_Height: 49
      }
    }
  ]
};

export const addFeaturesResponse = {
  addResults: [
    {
      objectId: 1001,
      success: true
    }
  ]
};

export const updateFeaturesResponse = {
  updateResults: [
    {
      objectId: 1001,
      success: true
    }
  ]
};

export const deleteFeaturesResponse = {
  deleteResults: [
    {
      objectId: 1001,
      success: true
    }
  ]
};
