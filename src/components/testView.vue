<template>
  <v-app>
    <v-main>
      <v-img max-height="1080" src="../assets/bg/jimmy-conover.jpg">
        <v-container>
          <v-data-table
            :headers="allHeader"
            :items="playerList"
            :items-per-page="15"
            :search="search"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title class="text-uppercase">
                  {{ tname }}
                </v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
                <template>
                  <v-checkbox
                    v-model="editMode"
                    :label="`Edit Mode: ${editMode}`"
                    @click="editOpen"
                  ></v-checkbox
                ></template>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      dark
                      class="mb-2"
                      v-bind="attrs"
                      v-on="on"
                      >New Player</v-btn
                    >
                  </template>
                  <v-card>
                    <v-card-title
                      ><span class="text-capitalize">
                        {{ formTitle }}
                      </span></v-card-title
                    >
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="editedItem.tid"
                              label="Team Id"
                              disabled
                            ></v-text-field
                          ></v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="editedItem.pid"
                              label="Player Id"
                              disabled
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="editedItem.name"
                              label="Player Name"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="editedItem.age"
                              label="Age"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-select
                              v-model="editedItem.position"
                              :items="positionList"
                              label="Position"
                            ></v-select>
                            <template v-slot:item="{ item, attrs, on }">
                              <v-list-item v-bind="attrs" v-on="on">
                                <v-list-item-title
                                  :id="attrs['aria-labelledby']"
                                  v-text="item"
                                ></v-list-item-title>
                              </v-list-item>
                            </template>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="close">
                        Cancel
                      </v-btn>
                      <v-btn color="blue darken-1" text @click="save">
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card>
                    <v-card-title class="text-h5"
                      >Are you sure you want to delete this
                      player?</v-card-title
                    >
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="closeDelete"
                        >Cancel</v-btn
                      >
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="deleteItemConfirm"
                        >OK</v-btn
                      >
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
            </template>
          </v-data-table>
        </v-container>
      </v-img>
    </v-main>
  </v-app>
</template>

<script>
import {
  getPlayers /*, addNewPlayer, editplayer, deletePlayer,*/,
} from "../api";
export default {
  data() {
    return {
      playerList: [],
      tname: this.$route.params.tname,
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      search: "",
      editMode: false,
      headers: [
        { text: "Player Id", value: "pid" },
        { text: "Name", value: "name" },
        { text: "Age", value: "age" },
        { text: "Position", value: "position" },
      ],
      actionHeader: [{ text: "Actions", value: "actions", sortable: false }],
      allHeader: [],
      editedItem: {
        tid: this.$route.params.tid,
        pid: "-",
        name: "",
        age: "",
        position: "",
      },
      defaultItem: {
        tid: this.$route.params.tid,
        pid: "-",
        name: "",
        age: "",
        position: "",
      },
      positionList: [
        "Goalkeeper",
        "Centre-back",
        "Sweeper",
        "Full-back",
        "Wing-back",
        "Central-midfielder",
        "Defensive-midfielder",
        "Attacking-midfielder",
        "Wide-midfielder",
        "Second-striker",
        "Centre-forward",
        "Winger",
      ],
    };
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? `New Player to ${this.tname}`
        : "Edit Information";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  async created() {
    const res = await getPlayers(this.$route.params.tid);
    this.playerList = res.data;
    this.allHeader = this.headers;
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.playerList.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.playerList.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.playerList[this.editedIndex], this.editedItem);
      } else {
        this.playerList.push(this.editedItem);
      }
      this.close();
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    deleteItemConfirm() {
      this.playerList.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    editOpen() {
      if (this.editMode) {
        this.allHeader = this.headers.concat(this.actionHeader);
      } else {
        this.allHeader = this.headers;
      }
    },
    
  },
};
</script>

<style>
</style>