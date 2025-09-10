import Airtable from "airtable";

const key = process.env.REACT_APP_AIRTABLE_KEY;
const baseID = process.env.REACT_APP_AIRTABLE_BASE;
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: key,
});

const base = Airtable.base(baseID);

const getTheatreProjects = async () => {
  return base("lightingProjects").select({}).all();
};

const getDevProjects = async () => {
  return base("devProjects").select({}).all();
};

export { getTheatreProjects, getDevProjects };
