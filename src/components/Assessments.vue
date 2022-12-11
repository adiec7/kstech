<template>
  <div>
    <b-container class="text-left p-3">
      <h4 class="mb-5">Assessment</h4>
      <b-row>
        <b-col cols="12" sm="4">
          <p class="mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            minima ab distinctio odio quisquam soluta!
          </p>

          <b-button variant="light"
            ><i class="fa fa-upload" aria-hidden="true"></i> Upload
            Question</b-button
          >
        </b-col>
        <b-col cols="12" sm="8">
          <b-form>
            <b-form-group class="mb-4">
              <div class="inputs">
                <b-form-input></b-form-input>
                <span class="label"> Title</span>
              </div>
            </b-form-group>
            <div class="rounded-10 p-3 border mb-4">
              <b-form-row class="justify-content-between mb-4">
                <span> <i class="fas fa-dot-circle mr-2"></i> Question 1</span>

                <span
                  ><i class="fa fa-angle-down mr-4" aria-hidden="true"></i>
                  <i
                    class="fa fa-ellipsis-v"
                    aria-hidden="true"
                    id="options"
                  ></i>
                  <b-popover target="options" triggers="hover">
                    <div class="border-bottom p-2">Delete</div>
                    <div class="p-2">Duplicate</div>
                  </b-popover>
                </span>
              </b-form-row>

              <b-form-row>
                <b-col cols="12" sm="6">
                  <b-form-group class="mb-4">
                    <div class="inputs auto">
                      <b-form-select v-model="type">
                        <b-form-select-option value="single"
                          >Single Answer</b-form-select-option
                        >
                        <b-form-select-option value="multiple"
                          >Multiple Answer</b-form-select-option
                        >
                        <b-form-select-option value="paragraph"
                          >Paragraph</b-form-select-option
                        >
                        <b-form-select-option value="dropdown"
                          >Dropdown</b-form-select-option
                        >
                        <b-form-select-option value="date"
                          >Date</b-form-select-option
                        >
                        <b-form-select-option value="upload"
                          >File Upload</b-form-select-option
                        >
                        <b-form-select-option value="linear"
                          >Linear Scale</b-form-select-option
                        >
                      </b-form-select>
                      <span class="label"> Type</span>
                    </div>
                  </b-form-group>
                </b-col>
                <b-col cols="12" sm="6">
                  <b-form-group class="mb-4">
                    <div class="inputs">
                      <b-form-input></b-form-input>
                      <span class="label"> Label</span>
                    </div>
                  </b-form-group>
                </b-col>
                <b-col cols="12" sm="12">
                  <b-form-group class="mb-4">
                    <div class="inputs">
                      <b-form-textarea rows="6"></b-form-textarea>
                      <span class="label"> Question</span>
                    </div>
                  </b-form-group>
                  <div class="py-2 pb-4">
                    <b-button variant="light" size="sm" class="mr-3"
                      ><i class="fa fa-paperclip" aria-hidden="true"></i> Add
                      Files</b-button
                    >
                    <b-button variant="light" size="sm"
                      ><i class="fa fa-link" aria-hidden="true"></i> Add
                      Links</b-button
                    >
                  </div>
                </b-col>
              </b-form-row>
              <!-- options  -->

              <div v-if="type !== 'paragraph'">
                <b-form-row class="align-item-center">
                  <b-col cols="11" sm="11">
                    <b-form-group>
                      <b-input-group class="w-100">
                        <template #append>
                          <b-input-group-text
                            class="bg-white border-left-0"
                            style="border-color: #ff7e1dad"
                          >
                            <i class="fas fa-dot-circle"></i>
                          </b-input-group-text>
                        </template>

                        <div class="inputs add">
                          <b-form-input class="border-right-0"></b-form-input>
                          <span class="label"> Option 1</span>
                        </div>
                      </b-input-group>
                    </b-form-group>
                  </b-col>
                  <b-col cols="1" sm="1">
                    <b-form-group class="mb-0">
                      <b-icon icon="x"></b-icon>
                    </b-form-group>
                  </b-col>
                </b-form-row>
              </div>
              <div v-if="type == 'date'">
                <b-form-datepicker></b-form-datepicker>
              </div>
              <div v-if="type == 'upload'" class="p-3">
                <b-form-row>
                  <b-col cols="12" sm="6">
                    <b-form-checkbox value="image">Image</b-form-checkbox>
                  </b-col>
                  <b-col cols="12" sm="6">
                    <b-form-checkbox value="pdf">PDF</b-form-checkbox>
                  </b-col>
                  <b-col cols="12" sm="6">
                    <b-form-checkbox value="audio">Audio</b-form-checkbox>
                  </b-col>
                  <b-col cols="12" sm="6">
                    <b-form-checkbox value="presentation"
                      >Presentation</b-form-checkbox
                    >
                  </b-col>
                  <b-col cols="12" sm="6">
                    <b-form-checkbox value="spreadsheet"
                      >Spreadsheet</b-form-checkbox
                    >
                  </b-col>
                  <b-col cols="12" sm="6">
                    <b-form-checkbox value="document">Document</b-form-checkbox>
                  </b-col>
                  <b-col class="mt-4" cols="12" sm="12">
                    <div class="d-flex">
                      <b-col cols="12" sm="5" class="p-0">
                        Maximum number of files: {{ range }}
                        <b-form-input
                          v-model="range"
                          type="range"
                        ></b-form-input>
                      </b-col>
                    </div>
                  </b-col>
                </b-form-row>
              </div>

              <div v-if="type == 'linear'">
                <b-form-row>
                  <b-col cols="6" sm="3">
                    <b-form-group class="mb-4">
                      <div class="inputs">
                        <b-form-input></b-form-input>
                        <span class="label"> From</span>
                      </div>
                    </b-form-group>
                  </b-col>
                  <b-col cols="6" sm="3">
                    <b-form-group class="mb-4">
                      <div class="inputs">
                        <b-form-input></b-form-input>
                        <span class="label"> To</span>
                      </div>
                    </b-form-group>
                  </b-col>
                </b-form-row>
              </div>
              <div class="py-2 pb-4 d-flex justify-content-between">
                <div>
                  <b-button class="mb-3" variant="light" size="sm"
                    ><i class="fa fa-plus" aria-hidden="true"></i> Add
                    option</b-button
                  >
                </div>
                <div>
                  <b-button variant="light" size="sm" class="mr-3"
                    ><i class="fa fa-trash" aria-hidden="true"></i>
                    Delete</b-button
                  >
                  <b-button variant="light" size="sm">
                    <i class="fas fa-copy"></i> Duplicate</b-button
                  >
                </div>
              </div>

              <div class="py-3 d-flex">
                <b-col cols="12" sm="2">
                  <b-form-group class="mr-5">
                    <b-form-input size="sm"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" sm="10">
                  <b-form-group class="mr-5">
                    <b-form-checkbox size="sm"
                      ><small class="d-flex align-items-center"
                        >Stop multiple answers at
                        <b-form-input
                          size="sm"
                          placeholder="2"
                          class="stop_options"
                        ></b-form-input>
                        options</small
                      ></b-form-checkbox
                    >
                  </b-form-group>
                </b-col>
              </div>
            </div>

            <b-button class="mb-3" variant="outline-danger" size="sm"
              ><i class="fa fa-plus" aria-hidden="true"></i> Add
              question</b-button
            >

            <div class="mt-5">
              <b-button class="mb-3 mr-3" variant="outline-secondary"
                ><i class="fa fa-minus" aria-hidden="true"></i> Skip</b-button
              >
              <b-button class="mb-3" variant="secondary"
                ><i class="fa fa-plus" aria-hidden="true"></i> Save
                question</b-button
              >
            </div>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "upload",
      range: 3,
    };
  },
};
</script>

<style scoped>
.stop_options {
  width: 30px;
  height: 20px;
  margin: 0 8px;
}
.inputs.add{
    width:90%
}

</style>