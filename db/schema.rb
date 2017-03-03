# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170303184935) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "checkouts", force: :cascade do |t|
    t.string   "first_name",    null: false
    t.string   "last_name",     null: false
    t.string   "street",        null: false
    t.string   "city",          null: false
    t.string   "state",         null: false
    t.integer  "zip",           null: false
    t.integer  "credit_number", null: false
    t.integer  "code",          null: false
    t.integer  "license_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["license_id"], name: "index_checkouts_on_license_id", using: :btree
  end

  create_table "licenses", force: :cascade do |t|
    t.string   "type",       null: false
    t.float    "price",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
