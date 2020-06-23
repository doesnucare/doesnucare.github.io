<template>
  <v-app id="inspire">
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >

        <v-row
          align="center"
          justify="center"
        >
          <v-col>
            <v-card class="elevation-12 justify-center">
               <v-container
                class="fill-height justify-center"
                fluid
                >
                    <v-container class="title fill-height justify-center">
                        <Content slot-key="title"/>
                    </v-container>
                <v-container class="intro fill-height justify-center">
                    <Content slot-key="intro"/>
                </v-container>
                <v-container class="action fill-height justify-center">
                    <Content slot-key="action"/>
                    <v-btn class="white--text" color="#211B1C" href="https://www.change.org/p/northeastern-university-does-nu-care">
                        Sign the Petition
                    </v-btn>
                    
                </v-container>
               </v-container>
                
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>