<template>
  <v-app>
    <v-main>
      <ToolbarTitle />
      <v-img max-height="1080" src="../assets/bg/jimmy-conover.jpg">
      <div>
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
                <!-- <v-spacer></v-spacer> -->
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <template>
                  <v-checkbox
                    v-model="editMode"
                    label="Edit"
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
                        <v-form ref="form" v-model="valid">
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
                                :rules="rules.empty"
                                label="Player Name"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.age"
                                :rules="rules.age"
                                label="Age"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-select
                                v-model="editedItem.position"
                                :rules="rules.empty"
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
                        </v-form>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="error" text @click="close"> Cancel </v-btn>
                      <v-btn
                        :disabled="!valid"
                        color="info"
                        text
                        @click="save(editedItem)"
                      >
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="550px">
                  <v-card>
                    <v-card-title class="text-h5"
                      >Are you sure you want to delete this
                      player?</v-card-title
                    >
                    <v-card-text>
                      <v-container>
                        <v-form ref="form" v-model="deleteMode">
                          <v-text-field
                            v-model="editedItem.name"
                            label="Player name"
                            disabled
                          ></v-text-field>
                          <v-text-field
                            :rules="rules.pid"
                            label="Please enter Player Id"
                          ></v-text-field>
                          <v-text-field
                            :rules="rules.confirm"
                            label="Confirm to Delete"
                          ></v-text-field>
                        </v-form>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="error" text @click="closeDelete"
                        >Cancel</v-btn
                      >
                      <v-btn
                        :disabled="!deleteMode"
                        color="info"
                        text
                        @click="deleteItemConfirm(editedItem.pid)"
                        >OK</v-btn
                      >
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="dialogAlert" persistent max-width="290">
                  <v-card justify="center">
                    <v-card-title class="text-h5"> Alert </v-card-title>
                    <v-card-text>Somthing went wrong!</v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="error" text @click="dialogAlert = false">
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <!-- <v-alert
                  :value="alert"
                  color="red"
                  prominent
                  dismissible
                  elevation="20"
                  type="error"
                  >Player information cannot be deleted.</v-alert
                > -->

                <!-- <v-bottom-sheet v-model="sheet" persistent>
                    <v-sheet class="text-center" height="200px">
                      <v-icon
                        class="mt-6"
                        text
                        color="error"
                        @click="sheet = !sheet"
                      >
                         mdi-close-circle
                      </v-icon>
                      <div class="py-3 text-h5">
                        Player information cannot be deleted.
                      </div>
                    </v-sheet>
                  </v-bottom-sheet> -->
              </v-toolbar>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon
                small
                color="grey darken-4"
                class="mr-2"
                @click="editItem(item)"
              >
                mdi-pencil
              </v-icon>

              <v-icon small color="red" @click="deleteItem(item)">
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
        </v-container>
        </div>
      </v-img>
    </v-main>
  </v-app>
</template>

<script>
import { getPlayers, deletePlayer, addNewPlayer, editplayer, getPositionList } from "../api";
import ToolbarTitle from "../components/ToolbarTitle.vue";
export default {
  components: {
    ToolbarTitle,
  },

  data() {
    return {
      playerList: [],
      tname: this.$route.params.tname,
      dialog: false,
      dialogDelete: false,
      dialogAlert: false,
      // alert: false,
      // sheet: false,
      deleteMode: true,
      valid: true,
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
      positionList: [],
      rules: {
        empty: [(val) => (val || "").length > 0 || "This field is required"],
        age: [(val) => val > 0 || "This field is required"],
        confirm: [(val) => val === "Confirm" || "Please Enter 'Confirm'"],
        pid: [
          (val) => val === `${this.editedItem.pid}` || "Player Id do not match",
        ],
      },
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
    const player = await getPlayers(this.$route.params.tid);
    this.playerList = player.data;
    const position = await getPositionList()
    this.positionList = position.data

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
      this.$refs.form.reset();
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save(data) {
      this.$refs.form.validate();
      if (this.editedIndex !== -1) {
        await editplayer(data).then((res) => {
          if (res.status === 200) {
            Object.assign(this.playerList[this.editedIndex], this.editedItem);
            this.close();
          }
        });
      } else {
        await addNewPlayer(data)
          .then((res) => {
            if (res.status === 200) {
              this.playerList.push(res.data);
              this.close();
            }
          })
          .catch((err) => {
            this.close();
            console.log(err.response.data);
            this.dialogAlert = true;
          });
      }
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$refs.form.reset();
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async deleteItemConfirm(pid) {
      this.$refs.form.validate();
      await deletePlayer(pid)
        .then((res) => {
          if (res.status === 200) {
            this.playerList.splice(this.editedIndex, 1);
            this.closeDelete();
          }
        })
        .catch((err) => {
          this.closeDelete();
          console.log(err.response.data);
          this.dialogAlert = true;
          // this.alert = true;
          // this.sheet = true;
        });
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
.blue-color {
  background-color: #CDEFFF;
}
.white-color {
  background-color: white;
}
</style>