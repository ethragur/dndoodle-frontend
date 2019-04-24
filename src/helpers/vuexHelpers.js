export function vuexGetterSetters(namespace, ...getSet) {
  let fns = {};
  console.log(getSet);
  getSet.forEach((item) => {
    if(Array.isArray(item) && item.length === 2) {
      fns[ item[ 0 ] ] = {
        get() {
          return this.$store.getters[ `${namespace}/${item[ 0 ]}` ];
        },
        set(value) {
          this.$store.commit(`${namespace}/${item[ 1 ]}`, value);
        }
      };
    }
    else if(Array.isArray(item) && item.length === 1) {
      fns[ item[ 0 ] ] = function() {
        return this.$store.getters[`${namespace}/${item[ 0 ]}`];
      };
    }
    else if(typeof item === 'string') {
      fns[ item ] = function() {
        return this.$store.getters[`${namespace}/${item}`];
      };
    }
  });
  for(let key in fns) {
    //fns[key].vuex = true;
  }
  console.log(fns);
  return fns;
}