//er kaj hobe ekta data pabe prop akare and eitake se children soho execute kore dibe 
const RenderProp = ({data,children}) => { 
  console.log(children); 
  return children(data); 
  // return data.welcome('khalid'); 
}
export default RenderProp; 