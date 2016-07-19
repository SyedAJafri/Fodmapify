class Ingredient < ActiveRecord::Base
  validates :name, :presence =>  true, :length => { :maximum => 200 }
  validates :fodmap, :presence =>  true, inclusion: { in: [true, false] }, exclusion: { in: [nil] }
end
