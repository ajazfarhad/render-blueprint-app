class CreateImages < ActiveRecord::Migration[6.1]
  def change
    create_table :images do |t|
      t.string :caption
      t.text :description
      t.string :link

      t.timestamps
    end
  end
end
