<template>
    <v-container grid-list-xs>
        <v-layout column>
            <v-flex>
                <v-img
                :src="pic.url"
                >
                    <template v-slot:placeholder>
                        <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                        >
                            <v-progress-circular indeterminate color="blue"></v-progress-circular>
                        </v-row>
                    </template>                
                </v-img>
            </v-flex>
            <v-flex>
                <h2>{{ pic.headline }}</h2>
                <p class="subtitle">{{ pic.info }}</p>
            </v-flex>
            <v-flex>
                <div>
                    <p 
                        class="text-justify"
                        v-for="(content, i) in get_contents" :key="i"
                    >
                        {{content}}
                    </p>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props:{
        pic:{
            type:Object,
            required:true
        }
    },
    data(){
        return{
        }
    },
    computed:{
        get_contents: function() {
            let raw_content = this.pic.content
            raw_content = raw_content.replaceAll("\t", "")  
            raw_content = raw_content.replaceAll("    ", "")  // 4 white spaces is same with 1 tab
            let contents = raw_content.split("\n")
            return contents
        }
    },
    created: function() {
        // let raw_content = this.pic.content
        // raw_content = raw_content.replaceAll("\t", "")  
        // raw_content = raw_content.replaceAll("    ", "")  // 4 white spaces is same with 1 tab
        // let contents = raw_content.split("\n")
        // console.log(contents)
    }
}
</script>