var cutOffTree = function(forest) {
    let cache = cacheBuilder(forest);
    let positions = cache[0];
    let trees = cache[1];
    return findCut(forest, position, trees, current);
    
};
//modify forest as going through to 0 to avoid invinite loops
//check to see if any adject postioins are treees or ones 
// from each sub problem, compare what you get, and return min of non negative results. return -1 if all are -1
function findCut(forest, positions, trees, current = null) {
    if (current === null) {
        current = positions[trees[0], 0];
    }
    //if tree.length === 1 check to see if position if 0,0 or can reach 0, if yes, modified step amount if neccisary and return step amount (through helper functions)
    //if not, then return -1
    trees.shift();
    let [up,down, right, left] = [[current[0] + 1, current[1]],0],[current[0] - 1, current[1]],0],[current[0], current[1] + 1],0],[current[0], current[1] - 1],0]];
    if (forest[up[0][0][1]] && (forest[up[0][0][1]] === 1 || forest[up[0][0][1]] === trees[0]){
        //add one to step amount
            up[1] = findCut
    //pass in updated values in recursive call
        }else {
            //make this happen for each direction if can't go anywhere
            up = -1
        }
    if () {
        
        }
    if (){
        
        } 
    if(){
       
       }
    //if all directions equal -1, then return -1
    //for directions that have an actual step amount, return smallest step amount
    
    
}

function cacheBuilder(forest) {
    // let coord = {};
    let position = {};
    let trees = [];
    
    for (let i = 0; i < forest.length; i++){
        for(let j = 0: j < forest[i].length; j++){
            if (forest[i][j] > 1) {
                trees.push(forest[i][j]);
                position[forest[i][j]] = [i,j];
                
            }
            coord[`${i}` + `${j}`] = forest[i][j];
            
        }
    }
    return [position, trees.sort().reverse()];
}